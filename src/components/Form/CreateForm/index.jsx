import { Select, SmallError, ThemeInputForm, ThemeLabelForm } from "../../../style/typography"
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import api from "../../../services/api";
import { toast } from "react-toastify";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext'; 
const schema = yup.object({
    title: yup.string().required("Preencha o campo obrigatório"),

});


const CreateForm = ({setIsOPenCreateModal}) => {
    const {loadUser} = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function registerTech(techData) {
        const token = localStorage.getItem('@TOKEN');
        api.defaults.headers.authorization = `Bearer ${token}`;
        api.post('/users/techs', techData)
        .then( _ => {
            loadUser()
           setIsOPenCreateModal(false)
           toast.success('Adicionado com sucesso')


        }).catch( _ => toast.error('Ops! Houve algum erro.'))
        
    }
    
    
    return (
        <Form onSubmit={handleSubmit(registerTech)}>
            <div className="input-box">
                <ThemeLabelForm htmlFor="title">Nome</ThemeLabelForm>
                <ThemeInputForm placeholder="Digite aqui..." id="title" {...register("title")} border={errors.title ? '1px solid var(--Red-4)' : '1px solid var(--Grey-0)'}/>
                <SmallError>{errors.title?.message}</SmallError>
            </div>
            <div className="input-box">
                <ThemeLabelForm>Selecione o status</ThemeLabelForm>
                <Select name="" id="" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
                </Select>
            </div>
            <div className="buttons">
                <button type="submit" className="button-register-tec">Cadastrar tecnologia</button>
            </div>
        </Form>
    )
}
export default CreateForm;