import React from "react";
import {CardItemStyled} from "./cardItem.styled";

const CardItem = ({

  alignStateCenter,
  cardNumber,
  cardText,
  cardTitle,
}) => {
  return (
    
    <CardItemStyled className="mb-2" centeredState={alignStateCenter}>
      {cardNumber ? (
        <span className="card-num">{cardNumber}</span>
      ) : (
        <div className="card-num">

      
        </div>
      )}
  
      <h4>{cardTitle}</h4>
      <p>{cardText}</p>
      
    </CardItemStyled>
  );
};

export default CardItem;
