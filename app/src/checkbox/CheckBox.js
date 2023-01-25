import React, { useState } from 'react'

import { Box } from '@mui/material';

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



export default function CheckBox() {
    const [checked, setChecked] = useState([]);

   // Add/Remove checked item from list
const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Return classes based on whether item is checked
    // const isChecked = (item) =>
    // checked.includes(item) ? "checked-item" : "not-checked-item";






  return (
    <Box sx={{paddingLeft: 5, fontSize: 19}}>
       {tipiProdotto.map((item, index) => (
        <div sx={{ p: 2}}>
            <input value={item.name} type="checkbox" onChange={handleCheck} />
            <label>{item.name}</label>

        </div>
       ))}
    </Box>
  )
}
