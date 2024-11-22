import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import ContactInfoBlock from "./ContactInfoBlock";
import ContactMapFormBlock from "./ContactMapFormBlock";

const Contact = () => {
  return (
    <SectionContainer id={"contato"} secName={"contact-sec"}>
      <SectionHead
        head={"contato"}
        text={
          "Sit sint consectetur velit quisquam cupiditate impedit suscipit alias"
        }
      />
      <ContactInfoBlock />
      <ContactMapFormBlock />
    </SectionContainer>
  );
};

export default Contact;
