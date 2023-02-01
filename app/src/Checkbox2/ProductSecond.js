import React from "react";

const ProductSecond = ({ title, category, price }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{price}</p>
    </article>
  );
};

export default ProductSecond;
