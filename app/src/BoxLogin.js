import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import ArrowSvg from "./assets/Arrow.svg";
import { Box } from "@mui/system";
import "./footer.css";

function BoxLogin() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <span className="span-footer">Iscriviti alle email di marketing</span>

      <Box sx={{ width: "15.625rem", display: "flex" }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">
          <img src={ArrowSvg} alt="arrow" />
        </Button>
      </Box>
    </Box>
  );
}

export default BoxLogin;
