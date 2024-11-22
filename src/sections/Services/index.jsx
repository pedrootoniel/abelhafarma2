import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import ServicesBlock from "./ServicesBlock";

const Services = () => {
  return (
    <SectionContainer id={"serviços"} secName={"services-sec"}>
      <SectionHead
        head={"serviços"}
        text={
          "Sit sint consectetur velit quisquam cupiditate impedit suscipit alias"
        }
      />
      <ServicesBlock />
    </SectionContainer>
  );
};

export default Services;
