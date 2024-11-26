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
      <h3>Abelha Rainha Farma</h3>
      <p className="mb-1">Telefone: +55 62 9999-9999</p>
      <p className="mb-1">Email: Abelha Farma</p>
      <ul>
        
        <a href="/">
        <li>
          <FaFacebookF />
        </li>
        </a>
        <a href="/">
        <li>
          <FaInstagram />
        </li>
        </a>

        <a href="/">
        <li>
          <FaTwitter />
        </li>
        </a>
        <a href="/">
        <li>
          <FaLinkedinIn />
        </li>
        </a>

      </ul>
    </FooterSquareStyled>
  );
};

export default FooterSquare;
