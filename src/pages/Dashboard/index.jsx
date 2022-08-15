import { SmallButton } from "../../style/global";
import { Img } from "../Login/styles";
import { Link } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";
import { Container, Header, Main, Nav } from "./styles";
import { ThemeLabelDashboard, ThemeTitle } from "../../style/typography";
import { useEffect, useState } from "react";
import api from "../../services/api";

const Dashboard = () => {
 /*   const [user, setUser] = useState('')
   useEffect(() => {
    api.get('/users/:user_id')
    .then(response => setUser(response.data.user.name))
   }, [user]) */

  return (
    <>
      <Nav>
        <div className="nav-box">
          <Img src={Logo} alt="Logo" />
          <Link to="/">
            <SmallButton>Sair</SmallButton>
          </Link>
        </div>
      </Nav>
      <Header>
        <div className="header-box">
          <ThemeTitle tag={"h1"} className={"title1"}>
           Olá, Dara!
          </ThemeTitle>
          <ThemeLabelDashboard>Primeiro Módulo</ThemeLabelDashboard>
        </div>
      </Header>
      <Main>
        <Container>
          <ThemeTitle tag={"h2"} className={"title2"}>
            Que pena! Não foi dessa vez.
          </ThemeTitle>
          <ThemeLabelDashboard tag={"h3"} className={"title3"}>
            Quem sabe amanhã...
          </ThemeLabelDashboard>
        </Container>
      </Main>
    </>
  );
};
export default Dashboard;
