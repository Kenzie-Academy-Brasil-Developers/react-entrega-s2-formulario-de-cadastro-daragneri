
import { useState } from 'react';
import {FaRegTrashAlt} from 'react-icons/fa'
import api from '../../../services/api';
import {ThemeNivelTech, ThemeTitle } from '../../../style/typography';
import EditModal from '../../Modais/EditModal';
import { Li } from './../Card/styles'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
const Card = ({tech}) => {

    const {loadUser} = useContext(UserContext);
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    
    function handleDeleteTech(idtech) {
        const token = localStorage.getItem('@TOKEN');
        api.defaults.headers.authorization = `Bearer ${token}`;
       

        api.delete(`/users/techs/${idtech}`)
        .then( _ => {
            setIsOpenEditModal(false)
            loadUser()

        })
        
        .catch(err => console.log(err))
    }
    
     return (
        
        <Li onClick={() => setIsOpenEditModal(true)}>
            <ThemeTitle tag={'h3'} titleSize={'title3'}>{tech.title}</ThemeTitle>
            <div className='li-box'>
                <ThemeNivelTech>{tech.status}</ThemeNivelTech>
                <button onClick={(event) => {
                    event.stopPropagation()
                    handleDeleteTech(tech.id)}}><FaRegTrashAlt color={'var(--White)'} fontSize={'12px'}/></button>
            </div>
            {isOpenEditModal && (
            <EditModal title={"Editar tecnologia"} setIsOpenEditModal={setIsOpenEditModal} tech={tech} handleDeleteTech={handleDeleteTech}/>
      )     }
        </Li>
    )
};
export default Card;