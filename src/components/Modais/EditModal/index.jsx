
import {IoMdClose} from 'react-icons/io'
import { ThemeTitle } from '../../../style/typography';
import EditForm from '../../Form/EditForm';
import { Container } from '../styles';


const EditModal = ({title, setIsOpenEditModal, tech, handleDeleteTech}) => {

    
    return (
        <Container onClick={(event) => event.stopPropagation()}>


            <div className='content'>

                <div className='top-box-modal'>
                    <ThemeTitle tag={'h3'} titleSize={'title3'}>{title}</ThemeTitle>
                    <button onClick={() => setIsOpenEditModal(false)} className='close'><IoMdClose color='var(--White)' fontSize={'18px'}/></button>
                </div>

                <div className='content-children'>
                    <EditForm tech={tech} handleDeleteTech={handleDeleteTech} setIsOpenEditModal={setIsOpenEditModal}/>
                </div>

            </div> 

        </Container>
    )
};
export default EditModal;