import * as React from "react";

import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./style.css";
import { Button } from "@mui/material";


export default function UnstyledButtonsSimple() {

  return (
          <div className="bannerButton">
            <Stack spacing={2} direction="row">
              <Button className="btnMedia" style={{ alignItems: "center", color: "black", backgroundColor: "white", height: "20px",  marginTop: 10, fontSize: {xs: "px", sm: 12, md: 14} }}>
                Buy Now {<ArrowForwardIosIcon style={{ width: {sx: "10px", sm: "12px", md: "20px", lg: "55px", xl: "30px"} }} />}
              </Button>
             </Stack>
            </div>

  );
}

