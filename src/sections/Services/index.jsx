import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import ServicesBlock from "./ServicesBlock";

const Services = () => {
  return (
    <SectionContainer id={"serviços"} secName={"services-sec"}>
      <SectionHead
        head={"Nossos Produtos"}
        text={
          "Uma linha que valoriza a diversidade e o bem-estar!"
        }
      />
      <ServicesBlock />
    </SectionContainer>
  );
};

export default Services;
