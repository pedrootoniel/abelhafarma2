import React from "react";
import {Col, Image} from "react-bootstrap";
import SectionContainer from "../../components/SectionContainer";
import AboutBlocks from "./AboutBlocks";
import AboutSponsor from "./AboutSponsor";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {RowReversedStyled} from "./About.styled";
import {paragraphs} from "./aboutData";
import aboutImage from "../../assets/about.png";

const About = () => {
  return (
    <>
      <SectionContainer id={"sobre nós"} secName={"about-sec"}>
        <RowReversedStyled className="my-2">
          <Col lg={6} className="mb-3">
            <h3>
             AR FARMA
            </h3>
            <p className="fst-italic">
             A Abelha Rainha Farma nasceu com este propósito: proporcionar momentos de autocuidado por meio do desenvolvimento de produtos de excelente qualidade, que valorizam a beleza da diversidade e o autoamor.
            </p>
            <ul>
              {paragraphs.map((par, idx) => (
                <li className="mb-3" key={idx}>
                  <AiOutlineCheckCircle
                    className="me-1"
                    size={24}
                    color={"var(--ds-blood)"}
                  />
                  {par}
                </li>
              ))}
            </ul>

          </Col>
          <Col lg={6} className="mb-3">
            <Image
              src={aboutImage}
              alt="about-img"
              width="100%"
              height="auto"
            />
          </Col>
        </RowReversedStyled>
        <AboutBlocks />
      </SectionContainer>
      <AboutSponsor />
    </>
  );
};

export default About;
