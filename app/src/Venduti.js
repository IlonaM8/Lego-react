import { Box, Typography } from "@mui/material";
import React from "react";
import { CheckboxProduct } from "./checkbox/CheckboxProduct";
import ProductsList from "./Products/DataProducts";
import "./checkbox/productPage.css"

export default function Venduti() {
  return (
    <Box className="product-page">
      <Typography className="banner-black" variant="h4">I più venduti</Typography>
      <Box className="banner-box">
      <Typography variant="h6">I set LEGO® più popolari</Typography>
      <p>Benvenuto nell'elenco definitivo dei set LEGO più popolari in questo momento. Da complessi articoli da collezione per gli adulti ad avventurosi set per i bambini, i costruttori di tutte le età adorano questi set. I set LEGO più venduti sono perfetti da donare alle persone che ami o per regalarti un nuovo set. Questo elenco viene aggiornato regolarmente, per consentirti di trovare sempre i set e i giocattoli più popolari. Cerchi ancora più ispirazione? Dai un'occhiata ai set in arrivo, disponibili solo su LEGO.com e negli Store o risparmia con una delle ultime offerte.
      </p>
      </Box>

      <CheckboxProduct />
      <ProductsList />
    </Box>
  );
}
