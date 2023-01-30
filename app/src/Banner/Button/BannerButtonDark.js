import * as React from "react";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@mui/material";
import "./style.css";


export default function UnstyledButtonsSimple() {

  return (
          <div className="bannerButton">
            <Stack spacing={2} direction="row">
              <Button className="btnMedia" style={{ display: "flex", alignItems: "center", gap: "5px", color: "black", backgroundColor: "white", marginTop: 10, fontSize: {xs: 10, sm: 12, md: 14, lg: 28, xl: 30 }}}>
                Compra ora {<ArrowForwardIosIcon style={{ width: {sx: "10px", sm: "12px", md: "20px", lg: "55px", xl: "30px"} }} />}
              </Button>
             </Stack>
            </div>

  );
}
