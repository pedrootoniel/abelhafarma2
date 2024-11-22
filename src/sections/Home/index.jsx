import React from "react";
import {Container} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import {HomeSectionStyled} from "./home.styled";
import homeImg from "../../assets/home-bg.jpg";
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
      <Container className="home-container animate__animated animate__lightSpeedInLeft">
        <h1>AR FARMA</h1>
        <h2>
          Com mais de 30 anos de mercado, a Abela Rainha se tornou a maior marca de cosméticos do Centro-Oeste e uma das maiores do mercado de vendas via catálago do Brasil.
        </h2>
        <CustomButton type="btn-on-img">Saiba mais</CustomButton>
      </Container>
    </HomeSectionStyled>
  );
};

export default Home;
