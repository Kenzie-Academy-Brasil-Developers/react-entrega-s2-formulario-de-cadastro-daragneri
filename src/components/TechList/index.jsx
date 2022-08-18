import Card from './Card'
import { List } from './styles';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
const TechList = () => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const {user} = useContext(UserContext);
    const [techList, setTechList] = useState([])
    
    useEffect(() => {
        setTechList(user.techs)

    }, [user.techs])
    return (
        <List>
            {
                techList.map(tech => <Card tech={tech} key={tech.id} setIsOpenEditModal={setIsOpenEditModal}/>)
            }
        </List>
    )
}
export default TechList;
