import React from "react";
import {SectionHeadStyled} from "./sectionHead.styled";

const SectionHead = ({head, text}) => {
  return (
    <SectionHeadStyled className="text-center py-4">

      <h2 className="sec-head">{head}</h2>
      <p>{text}</p>
    </SectionHeadStyled>
  );
};

export default SectionHead;
