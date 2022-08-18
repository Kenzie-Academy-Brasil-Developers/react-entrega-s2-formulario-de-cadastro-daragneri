import { Select, ThemeInputForm, ThemeLabelForm } from "../../../style/typography";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import api from "../../../services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


const schema = yup.object({
    status: yup.string().required("Preencha o campo obrigatório"),

});

const EditForm = ({tech, handleDeleteTech, setIsOpenEditModal}) => {
    const {loadUser} = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
     
    function editTech(dataTech) {
        const token = localStorage.getItem('@TOKEN')
        api.defaults.headers.authorization = `Bearer ${token}`;
        api.put(`/users/techs/${tech.id}`, dataTech)
        .then( _ => {
            loadUser()
            setIsOpenEditModal(false)
            toast.success('Editado com sucesso!') 
         }).catch( _ => toast.error('Ops! Houve algum erro.'))
    }
    console.log(errors)

    return (
        <Form onSubmit={handleSubmit(editTech)}>
            <div className="input-box">
                <ThemeLabelForm htmlFor="name">Nome do projeto</ThemeLabelForm>
                <ThemeInputForm placeholder={tech.title} id="name" disabled border={'1px solid var(--Grey-0)'}/>
            </div>
            <div className="input-box">
                <ThemeLabelForm>Status</ThemeLabelForm>
                <Select name="" id="" defaultValue={tech.status} {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </Select>
            </div>
            <div className="buttons">
                <button type="submit" className="button-save">Salvar alterações</button>
                <button onClick={() => handleDeleteTech(tech.id)} type="button" className="button-delete">Excluir</button>    
            </div>
        </Form>
    )
};
export default EditForm;