
import React from 'react';

const CardsInsideModal = ({ image, text }) => {
  return (
    <div>
      <img src={image} alt="cardimg" />
      <p>{text}</p>
    </div>
  );
}

export default CardsInsideModal;


