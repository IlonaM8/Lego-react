import * as React from "react";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Typography } from "@mui/material";
import "./style.css";


export default function UnstyledButtonsSimple() {

  return (
          <div className="bannerButton">
            <Stack spacing={2} direction="row">
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} className="btnMedia" style={{ color: "black", backgroundColor: "white", height: "35px",  marginTop: 10, fontSize: {xs: "8px", sm: "8px", md: "14px"}}}>
                <Typography sx={{fontSize: {xs:10, sm: 14, md: 16, lg: 20, xl: 22 } }}> Compra ora</Typography>

              </Button>
             </Stack>
            </div>

  );
}
