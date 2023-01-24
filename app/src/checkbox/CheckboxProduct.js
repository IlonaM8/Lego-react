import { Box, FormControlLabel, Checkbox, Typography } from '@mui/material';
import React from "react";


export const CheckboxProduct = () => {
    const [statusCheck, setStatusCheck] = React.useState([true, false]);

     const handleChange = (event) => {
          setStatusCheck([event.target.checked,
            event.target.checked]);
        };
        

    return(
        <Box>
            <Typography>Tipo Di Prodotto</Typography>
            <Box sx={{display: "flex", flexDirection: "column", padding: 5}}>

            <FormControlLabel
                    value="end"
                    control={<Checkbox checked={statusCheck} onChange={handleChange}/>}
                    label="Set"
                    labelPlacement="end"
                />
                 <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Home decor"
                    labelPlacement="end"
                    />
                     <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Adulti"
                    labelPlacement="end"
                    />
                     <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Fiori"
                    labelPlacement="end"
                    />
                     <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Regali per Pasqua"
                    labelPlacement="end"
                    />
            </Box>
        </Box>
    )
}
