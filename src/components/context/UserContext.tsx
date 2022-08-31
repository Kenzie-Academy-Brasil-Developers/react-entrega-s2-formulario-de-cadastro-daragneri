import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export const UserContext = createContext<IUserContext>({} as IUserContext);

interface IAuthProvider {
    children: ReactNode;
}

export interface IUser {
   id: string;
   name: string;
   email: string;
   course_module: string;
   bio: string;
   contact: string;
   created_at: string;
   updated_at: string;
   techs: [];
   works: [];
   avatar_url: null
}
export interface IFormRegister {
    name: string; 
    email: string;
    password: string;
    confirmPassword: string;
    bio: string;
    contact: string;
    course_module: string;   
}
interface IUserLogin {
    email: string;
    password: string;    
}



interface ITech {
    title: string;
    status: string;
    id: string;
    created_at: string;
    updated_at: string;
}

interface IUserContext {
   user: IUser | null; 
   registerUser: (data: IFormRegister) => void;
   signIn: (data: IUserLogin) => void;
   loading: boolean; 
   loadUser: () => void; 
   setTechs: React.Dispatch<React.SetStateAction<ITech[]>>;
   techs: ITech[];
}
const AuthProvider = ({children}: IAuthProvider) => {
    
    const [user, setUser] = useState<IUser | null>(null)
    const [loading, setLoading] = useState(true)
    const [techs, setTechs] = useState<ITech[]>([])
    
    const navigate = useNavigate();


    function registerUser(data: IFormRegister) {
  
        api.post('/users', data)
        .then(response => {
            navigate('/')
        })
        .catch(err => console.log(err))
      }
    
    async function loadUser() {

        const token = localStorage.getItem('@TOKEN');
        if(token) {
            try {
                api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                
                const { data } = await api.get('/profile');
                setUser(data);
                setTechs(data.techs)
               
            } catch (error) {
                localStorage.clear()
            }
        }
        setLoading(false)
    }
    

    const signIn = async (data: IUserLogin) => {
        const response = await api.post('/sessions', data);
        
        const {user: userResponse, token} = response.data;
        
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

       
       setUser(userResponse);
       setTechs(userResponse.techs)
       localStorage.setItem('@TOKEN', token);
       localStorage.setItem('@USERID', userResponse.id)

       navigate('/dashboard', {replace: true});
    }


    return (
        <UserContext.Provider value={{user, registerUser, signIn, loading, loadUser, setTechs, techs}}>
            {children}
        </UserContext.Provider>
    )
}
export default AuthProvider;