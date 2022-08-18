import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export const UserContext = createContext({});

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const navigate = useNavigate();
    
    async function loadUser() {

        const token = localStorage.getItem('@TOKEN');
        if(token) {
            try {
                api.defaults.headers.authorization = `Bearer ${token}`;
                
                const { data } = await api.get('/profile');
                setUser(data);
               

            } catch (error) {
                localStorage.clear()
            }
        }
        setLoading(false)
    }
    

    const signIn = async (data) => {
        const response = await api.post('/sessions', data);
        
        const {user: userResponse, token} = response.data;
        
        api.defaults.headers.authorization = `Bearer ${token}`;

       
       setUser(userResponse);
       localStorage.setItem('@TOKEN', token);
       localStorage.setItem('@USERID', userResponse.id)

       navigate('/dashboard', {replace: true});
    }


    return (
        <UserContext.Provider value={{user, signIn, loading, loadUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default AuthProvider;