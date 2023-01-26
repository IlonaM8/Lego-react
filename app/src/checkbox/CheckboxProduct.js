import { Box, FormControlLabel, Checkbox, Typography } from '@mui/material';
import React from "react";



const tipiProdotto = [
    {
        "id": 1,
        "name": "Set"
    },
    {
        "id": 2,
        "name": "Home decor"
    },
    {
        "id": 3,
        "name": "Adulti"
    },
    {
        "id": 4,
        "name": "Fiori"
    },
    {
        "id": 5,
        "name": "Regali per Pasqua"
    }
]

export const CheckboxProduct = () => {
    const [statusCheck, setStatusCheck] = React.useState([false, false, false, false, false]);

    const handleChange = (event, index) => {
        const newStatusCheck = [...statusCheck];
        newStatusCheck[index] = event.target.checked;
        setStatusCheck(newStatusCheck);
    };


    return(
        <Box sx={{display: "flex", alignItems: "center"}}>
            <Box>
            <Typography>Tipo Di Prodotto</Typography>
                <Box sx={{display: "flex", flexDirection: "column", padding: 5}}>
                    {tipiProdotto.map((product, index) => (
                        <FormControlLabel
                        key={product.id}
                        value="end"
                        control={<Checkbox checked={statusCheck[index]} onChange={(event) => handleChange(event, index)}/>}
                        label={product.name}
                        labelPlacement="end"
                    />
                    ))}
                </Box>
            </Box>

            <Box>
            {statusCheck.map((isChecked, index) => (
            isChecked ? (
          <Box sx={{display: "flex"}}
           key={tipiProdotto[index].id}>
            {/* Render elements when checkbox is checked */
             <Typography>You can see these set of cards: </Typography>}
          </Box>
        ) : null
      ))}
    </Box>
        </Box>
    )
}
