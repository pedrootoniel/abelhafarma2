import React from "react";
import {FooterSquareStyled} from "./footer.styled";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterSquare = () => {
  return (
    <FooterSquareStyled>
      <h3>Day</h3>
      <p className="mb-3">GOIÂNIA - GOIÁS</p>
      <p className="mb-1">Telefone: +55 62 9999-9999</p>
      <p className="mb-1">Email: Abelha Farma</p>
      <ul>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
    </FooterSquareStyled>
  );
};

export default FooterSquare;
