import React from "react";
import { Box } from "@mui/system";
import LogoLego from "./assets/LogoLego.svg";
import position from "./assets/Position.svg";
import "./footer.css";

function BoxLogo() {
  return (
    <Box sx={{ flex: "1 1 0%", marginRight: "1.25rem", padding: 0 }}>
      <Box>
        <Box sx={{ marginBottom: "1.25rem" }}>
          <img src={LogoLego} className="logo-footer" alt="logo" />
        </Box>
        <Box sx={{ marginBottom: 0 }}>
          <button className="footer-button">
            <img src={position} className="position-svg" alt="position" />
            Italia
          </button>
        </Box>
      </Box>

      <Box>
        <a className="footer-single-href" href="#">
          <div className="first-div-flex">Cataloghi LEGO</div>
        </a>
        <a className="footer-single-href" href="#">
          <div className="first-div-flex">Trova un negozio LEGO</div>
        </a>
      </Box>
    </Box>
  );
}

export default BoxLogo;
