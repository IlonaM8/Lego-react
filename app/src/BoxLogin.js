import React, { useState } from "react";
import ArrowSvg from "./assets/Arrow.svg";
import { Box } from "@mui/system";
import "./footer.css";
import UseAxios from "./useAxios";

function BoxLogin() {
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    UseAxios(null, email);
  };

  return (
    <div className="box-login">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <span className="span-footer">Iscriviti alle email di marketing</span>

        <Box sx={{ width: "15.625rem", display: "flex" }}>
          <input
            className="input-footer"
            placeholder="il tuo indirizzo e-mail"
            onChange={handleChange}
          />
          <button className="button-footer" onClick={handleClick}>
            <img src={ArrowSvg} alt="arrow" className="arrow-footer" />
          </button>
        </Box>
      </Box>
    </div>
  );
}

export default BoxLogin;
