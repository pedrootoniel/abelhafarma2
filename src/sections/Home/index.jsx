import React from "react";
import {Container} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import {HomeSectionStyled} from "./home.styled";
import homeImg from "../../assets/home-bg.png";
const Home = () => {
  return (
    <HomeSectionStyled
      id={"inicio"}
      className="home-sec d-flex align-items-center"
      style={{
        background: `url(${homeImg}) top center no-repeat`,
        height: "calc(100vh - 100px)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Container className="home-container">
        <h1>ABELHA RAINHA FARMA</h1>
        <h2>
        Descubra a linha de produtos que une inovação, acessibilidade e cuidado.
        Ideal para farmácias que oferecem o melhor em cosméticos e cuidados pessoais aos seus clientes.
        </h2>
        <CustomButton type="btn-on-img">Saiba mais</CustomButton>
      </Container>
    </HomeSectionStyled>
  );
};

export default Home;
