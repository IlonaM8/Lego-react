import { Box } from "@mui/material";
import React from "react";

function BoxRights() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <ul>
        <li className="rights-li"><a href='#' className="footer-single-href">Informativa sulla privacy</a></li>
        <li className="rights-li"><a href='#' className="footer-single-href">Cookie</a></li>
        <li className="rights-li"><a href='#' className="footer-single-href">Informativa legale</a></li>
        <li className="rights-li"><a href='#' className="footer-single-href">Termini d'uso</a></li>
        <li className="rights-li"><a href='#' className="footer-single-href">Accessibilità</a></li>
        <li className="rights-li"><a href='#' className="footer-single-href">Impostazioni dei cookie</a></li>
      </ul>

      <p className="rights-p">LEGO System A/S, DK-7190 Billund, Denmark. Per effettuare acquisti online è necessario essere maggiorenni. LEGO, il logo LEGO, la Minifigure, DUPLO, LEGENDS OF CHIMA, NINJAGO, BIONICLE, MINDSTORMS e MIXELS sono marchi registrati e copyright di LEGO Group. ©2022 The LEGO Group. Tutti i diritti riservati. L'uso di questo sito implica l'accettazione dei Termini d’uso.</p>
    </Box>
  );
}

export default BoxRights;
