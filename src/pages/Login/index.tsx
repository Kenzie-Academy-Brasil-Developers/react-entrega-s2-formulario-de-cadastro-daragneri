import { ThemeP, ThemeTitle } from "../../style/typography";
import { Container, Form, Img, Main, Nav } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputBox from "../../components/InputBox";
import { useContext }  from 'react'
import { UserContext } from "../../components/context/UserContext";



const Login = () => {

  interface IFormLogin {  
    email: string;
    password: string;    
}

    const navigate = useNavigate()
    const {signIn} = useContext(UserContext) 
    
  const schema = yup.object({
    email: yup
      .string()
      .email("* Deve ser um e-mail")
      .required("* O e-mail é obrigatório"),
    password: yup
      .string()
      .min(8, " * No mínimo 8 caracteres")
      .required("* A senha é obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Nav>
        <div className="nav-box">
          <Img src={Logo} alt="Logo" />
        </div>
      </Nav>
      <Main>
        <Container>
          <ThemeTitle titleSize={"title1"} tag={"h1"}>
            Login
          </ThemeTitle>
          <Form onSubmit={handleSubmit(signIn)}>
            <InputBox
            
              name={"email"}
              labelName={"E-mail"}
              placeholder={"E-mail"}
              errors={errors.email?.message}
              register={register}
              border={errors.email}
            />
            <InputBox
              name={"password"}
              labelName={"Senha"}
              placeholder={"Senha"}
              errors={errors.password?.message}
              register={register}
              border={errors.password}
              type={'password'}
            />

            <Button
              type="submit"
              text={"Entrar"}
              bcColor={"var(--Red)"}
              bcHover={"var(--Red-2)"}
            />

            <ThemeP>Ainda não possui uma conta?</ThemeP>

            <Link to="/register">
              <Button
                text={"Cadastre-se"}
                bcColor={"var(--Grey-1)"}
                bcHover={"var(--Red-2)"}
                type='button'
              />
            </Link>
          </Form>
        </Container>
      </Main>
    </>
  );
};
export default Login;
