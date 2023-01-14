import React from "react";
import { Box } from "@mui/system";
import facebook_footer from "./assets/facebook-footer.svg";
import twitter_footer from "./assets/twitter.svg";
import instagram_footer from "./assets/instagram.svg";
import youtube_footer from "./assets/youtube.svg";
import "./footer.css";

function BoxSocial() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <span className="span-footer">Seguici</span>

      <Box sx={{ display: "flex", height: "3.375rem", alignItems: "center" }}>
        <img src={facebook_footer} alt="facebook" className="social-footer" />
        <img src={twitter_footer} alt="twitter" className="social-footer" />
        <img src={instagram_footer} alt="instagram" className="social-footer" />
        <img src={youtube_footer} alt="youtube" className="social-footer" />
      </Box>
    </Box>
  );
}

export default BoxSocial;
