import styled from "styled-components";

export const HomeSectionStyled = styled.section`
  @media (max-width: 767px) {
    text-align: center;
  }
  color: #fff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  .home-container {
    z-index: 3;
    h1 {
      font-size: 25px;
      font-weight: 700;
   
    }
    h2 {
      color: #eee;
      font-family: "Raleway", sans-serif;
      font-size: 20px;
      margin-bottom: 30px;
      width: 650px;
    }
  }
`;