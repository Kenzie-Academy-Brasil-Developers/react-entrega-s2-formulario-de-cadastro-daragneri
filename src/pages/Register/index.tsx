import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SmallError, ThemeLabelRegister, ThemeTitle } from "../../style/typography";
import { Container, Form, Main, Nav } from "./styles";
import InputBox from "../../components/InputBox";
import { SmallButton } from "../../style/global";
import Logo from "./../../assets/Logo.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { Img } from "../Login/styles";
import { IFormRegister, UserContext } from "../../components/context/UserContext";
import { useContext } from "react";


const schema = yup.object({
  name: yup.string().required("* O nome é obrigatório"),
  email: yup
    .string()
    .email("* Deve ser um e-mail")
    .required("* O e-mail é obrigatório"),
  password: yup
    .string()
    .min(8, " * No mínimo 8 caracteres")
    .required("* A senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], 'As senhas precisam ser idênticas')
    .min(8, "* No mínimo 8 caracteres")
    .required("* A senha é obrigatória"),
    bio: yup
    .string()
    .required("Bio obrigatória"),
    contact: yup
    .string()
    .required("Contato obrigatório"),
    course_module: yup
    .string()
    .required("Escolha o módulo")
});

const Register = () => {
  const {registerUser} = useContext(UserContext) 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Nav>
        <div className="nav-box">
          <Img src={Logo} alt="Logo" />
          <Link to="/">
            <SmallButton>Voltar</SmallButton>
          </Link>
        </div>
      </Nav>
      <Main>
        <Container>
          <ThemeTitle titleSize={"title1"} tag={"h1"}>
            Crie sua conta
          </ThemeTitle>
          <ThemeLabelRegister>Rápido e totalmente grátis.</ThemeLabelRegister>

          <Form onSubmit={handleSubmit(registerUser)}>
            <InputBox
              name={"name"}
              labelName={"Nome"}
              placeholder={"Nome de usuário"}
              errors={errors.name?.message}
              register={register}
              border={errors.name}
            />
            <InputBox
              name={"email"}
              labelName={"E-mail"}
              placeholder={"E-mail"}
              register={register}
              errors={errors.email?.message}
              border={errors.email}
            />
            <InputBox
              name={"password"}
              labelName={"Senha"}
              placeholder={"Senha"}
              errors={errors.password?.message}
              register={register}
              border={errors.password}
              type={"password"}
            />
            <InputBox
              name={"confirmPassword"}
              labelName={"Confirme a senha"}
              placeholder={"Confirme a senha"}
              errors={errors.confirmPassword?.message}
              register={register}
              border={errors.confirmPassword}
              type={"password"}
            />
            <InputBox
              name={"bio"}
              labelName={"Bio"}
              placeholder={"Fale sobre você"}
              register={register}
              errors={errors.bio?.message}
              border={errors.bio}
            />
            <InputBox
              name={"contact"}
              labelName={"Contato"}
              placeholder={"Opção de contato"}
              register={register}
              errors={errors.contact?.message}
              border={errors.contact}
            />

            <select id="modules" {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">Módulo 01</option>
              <option value="Segundo módulo (Frontend Avançado)">Módulo 02</option>
              <option value="Terceiro módulo (Introdução ao Backend)">Módulo 03</option>
              <option value="Quarto módulo (Backend Avançado)">Módulo 04</option>
            </select>
            <SmallError>{errors.course_module?.message}</SmallError>

            <Button
              type="submit"
              text={"Cadastrar"}
              bcColor={"var(--Red-3)"}
              bcHover={"var(--Red-2)"}
            />
          </Form>
        </Container>
      </Main>
    </>
  );
};
export default Register;
