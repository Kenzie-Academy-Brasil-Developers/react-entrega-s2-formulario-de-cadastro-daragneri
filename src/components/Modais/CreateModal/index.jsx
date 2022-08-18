import { useEffect, useRef } from 'react';
import {IoMdClose} from 'react-icons/io'
import { ThemeTitle } from '../../../style/typography';
import CreateForm from '../../Form/CreateForm';
import { Container } from './../styles';

const CreateModal = ({title, setIsOpenCreateModal}) => {
    

    return (
        <Container onClick={() => setIsOpenCreateModal(false)}>

            <div className='content' onClick={event => event.stopPropagation()}>

                <div className='top-box-modal'>
                    <ThemeTitle tag={'h3'} titleSize={'title3'}>{title}</ThemeTitle>
                    <button onClick={() => setIsOpenCreateModal(false)} className='close'><IoMdClose color='var(--White)' fontSize={'18px'}/></button>
                </div>

                <div className='content-children'>
                    <CreateForm setIsOPenCreateModal={setIsOpenCreateModal}/>
                </div>

            </div> 

        </Container>
    )
};
export default CreateModal;