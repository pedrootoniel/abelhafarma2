import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import ContactInfoBlock from "./ContactInfoBlock";
//import ContactMapFormBlock from "./ContactMapFormBlock";

const Contact = () => {
  return (
    <SectionContainer id={"contato"} secName={"contact-sec"}>
      <SectionHead
        head={"contato"}
        text={
          "Inclua nossa linha em suas redes de farmácias e drogarias, oferecendo qualidade, inovação e preços acessíveis, garantindo ainda mais lucratividade. Aumente sua receita com cosméticos que encantam e fidelizam!"
        }
      />
      <ContactInfoBlock />
      {/* <ContactMapFormBlock /> */}
    </SectionContainer>
  );
};

export default Contact;
