
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CardsInsideModal = ({ image, text, bgColor }) => {
  return (
    <Box style={{display: "flex"}}>
    <div style={{backgroundColor: bgColor, width: 410, height: 660, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, paddingTop: 15}}>
      <img style={{maxWidth: 300}} src={image} alt="cardimg" />
      <h2 style={{ display: "flex", textAlign: 'center',  color: "white", fontSize: 36, fontWeight: 600}}>{text}</h2>
      <button style={{borderRadius: 50, padding: 8, paddingLeft: 20, paddingRight: 20, backgroundColor: "white", color: "black"}}>
          <Typography style={{fontSize: 14, textTransform: "uppercase", fontWeight: 600}}>Seleziona il set</Typography>
      </button>
    </div>
    </Box>
  );
}


CardsInsideModal.defaultProps = {
    bgColor: '#dd7053',

};





export default CardsInsideModal;


