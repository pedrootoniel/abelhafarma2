import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import PortfolioBlock from "./PortfolioBlock";

const Portfolio = () => {
  return (
    <SectionContainer id={"portfolio"} secName={"portfolio-sec"}>
      <SectionHead
        head={"Produtos campeões"}
        text={
          "Abelha Rainha Farma: parceira ideal para a sua farmácia!"
        }
      />
      <PortfolioBlock />
    </SectionContainer>
  );
};

export default Portfolio;
