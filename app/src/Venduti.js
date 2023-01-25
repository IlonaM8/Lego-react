import React from "react";
import { CheckboxProduct } from "./checkbox/CheckboxProduct";
import ProductsList from "./Products/DataProducts";

export default function Venduti() {
  return (
    <div>
      La pagina dei più Venduti
      <CheckboxProduct />
      <ProductsList />
    </div>
  );
}
