import Card from './Card'
import { List } from './styles';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
const TechList = () => {
    const [setIsOpenEditModal] = useState(false);
    const {techs} = useContext(UserContext);

    
    
    return (
        <List>
            {
                techs.map((tech, index) => <Card tech={tech} key={tech.id} index={index} setIsOpenEditModal={setIsOpenEditModal}/>)
            }
        </List>
    )
}
export default TechList;
