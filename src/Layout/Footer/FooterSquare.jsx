import React from "react";
import {FooterSquareStyled} from "./footer.styled";
import logo from '../../assets/logo.png';
import {
  FaInstagram
} from "react-icons/fa";

const FooterSquare = () => {
  return (
    <FooterSquareStyled>
    
    <img src={logo} alt="Logo" width={100} />
      {/*  <p className="mb-1">Telefone: +55 62 9999-9999</p>
      <p className="mb-1">Email: Abelha Farma</p>
       */}
      <ul> 
     
      
        <a href="instagram.com/abelharainhafarma">
        <li>
          <FaInstagram />
        </li>
        </a>


      </ul>
    </FooterSquareStyled>
  );
};

export default FooterSquare;
