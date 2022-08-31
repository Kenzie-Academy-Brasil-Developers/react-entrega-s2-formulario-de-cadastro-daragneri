import { SmallButton } from "../../style/global";
import { Img } from "../Login/styles";
import { Link } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";
import { Container, Header, Main, Nav } from "./styles";
import { ThemeLabelDashboard, ThemeTitle } from "../../style/typography";
import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../components/context/UserContext";
import { Navigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import TechList from "../../components/TechList";
import CreateModal from "../../components/Modais/CreateModal"


const Dashboard = () => {

  const { user, loading, loadUser } = useContext(UserContext);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);
  

  useEffect(() => {
    loadUser();
  }, [user]);

  if (loading) return <div>Carregando...</div>;
  return user ? (
    <>
      {isOpenCreateModal && (
        <CreateModal title={"Cadastrar Tecnologia"} setIsOpenCreateModal={setIsOpenCreateModal}/>     
      )}
      {/* {isOpenEditModal && (
        <EditModal title={"Editar tecnologia"} setIsOpenEditModal={setIsOpenEditModal}/>
      )} */}
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
          <ThemeTitle tag={"h1"} titleSize={"title1"}>
            Olá, {user.name}!
          </ThemeTitle>
          <ThemeLabelDashboard>{user.course_module}</ThemeLabelDashboard>
        </div>
      </Header>
      <Main>
        <Container>
          <div className="label-button">
            <ThemeTitle tag={"h2"} titleSize={"title2"}>
              Tecnologias
            </ThemeTitle>
            <button onClick={() => setIsOpenCreateModal(true)} className="add">
              <IoMdAdd size={"25px"} color={"var(--White)"} />
            </button>
          </div>
          <TechList/>
        </Container>
      </Main>
    </>
  ) : (
    <Navigate to="/" replace />
  );
};
export default Dashboard;
