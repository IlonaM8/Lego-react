import { Checkbox } from "@mui/material";
import React from "react";

const CheckboxSecond = ({ id, title, name, handleChange, checked }) => {
  return (
    <div>
      <Checkbox
        id={id}
        type="checkbox"
        name={name}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default CheckboxSecond;
