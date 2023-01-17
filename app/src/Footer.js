import * as React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import BoxLogo from "./BoxLogo";
import BoxLinks from "./BoxLinks";
import BoxLogin from "./BoxLogin";
import BoxSocial from "./BoxSocial";
import BoxRights from "./BoxRights";

import "./footer.css";

function Footer() {
  return (
    <>
      <Container maxWidth="xl" className="container-footer">
        <Box
          sx={{
            display: "flex",
            margin: "0px auto",
            maxWidth: "82.5rem",
            padding: "2.5rem 1.25rem 1.25rem 1.25rem",
          }}
        >
          <BoxLogo />

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flex: "4 1 0%",
              paddingTop: "0.625rem",
            }}
          >
            <BoxLinks />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            margin: "0px auto",
            maxWidth: "82.5rem",
            padding: "2.5rem 1.25rem 1.25rem 1.25rem",
            justifyContent: "space-between",
          }}
        >
          <BoxLogin />
          <BoxSocial />
        </Box>

        <Box
          sx={{
            display: "flex",
            margin: "0px auto",
            maxWidth: "82.5rem",
            padding: "2.5rem 1.25rem 1.25rem 1.25rem",
          }}
        >
          <BoxRights />
        </Box>
      </Container>
    </>
  );
}

export default Footer;
