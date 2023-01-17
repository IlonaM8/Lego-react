import React from "react";
import ArrowSvg from "./assets/Arrow.svg";
import { Box } from "@mui/system";
import "./footer.css";

function BoxLogin() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <span className="span-footer">Iscriviti alle email di marketing</span>

      <Box sx={{ width: "15.625rem", display: "flex" }}>
        <input className="input-footer" placeholder="il tuo indirizzo e-mail"/>
        <button className="button-footer">
          <img src={ArrowSvg} alt="arrow" className="arrow-footer" />
        </button>
      </Box>
    </Box>
  );
}

export default BoxLogin;
