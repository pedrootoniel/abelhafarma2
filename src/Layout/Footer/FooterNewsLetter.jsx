import React from "react";
import {FooterNewsLetterStyled} from "./footer.styled";
import {Form} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";

const FooterNewsLetter = () => {
  return (
    <FooterNewsLetterStyled>
      <h4>Cadastrar e-mail</h4>
      <p>
       Fique por dentro de todas as novidades do AR FARMA
      </p>
      <div className="subscribe-form">
        <Form.Control type="text" />
        <CustomButton type="regular-pricing-btn">Inscrever</CustomButton>
      </div>
    </FooterNewsLetterStyled>
  );
};

export default FooterNewsLetter;
