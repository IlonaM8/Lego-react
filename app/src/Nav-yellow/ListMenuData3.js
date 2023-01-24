
import React, { useState } from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


 const data = [
      "Verifica stato ordine",
      "Consegna e resi",
      "Trova uno Store",
      "Istruzioni per la costruzione",
      "Domande frequenti",
      "Pezzi di ricambio"
      ]
export default function ListMenuData3() {
  const [hoverStates, setHoverStates] = useState(new Array(data.length).fill(false));


  const listItems = data.map((element, index) => {
    return (
            <Button style={{display: "flex",
                            justifyContent: "start",
                            backgroundColor: "white",
                            textTransform: "none",
                            fontSize:14,
                            paddingTop: 2
                         }}>
                <Link
                onMouseEnter={() => {
                  const newHoverStates = [...hoverStates];
                  newHoverStates[index] = true;
                  setHoverStates(newHoverStates);
                }}

                onMouseLeave={(e) => {
                  const newHoverStates = [...hoverStates];
                  newHoverStates[index] = false;
                  let nextIndex = data.indexOf(e.relatedTarget.innerText);
                  newHoverStates[nextIndex] = true;
                  setHoverStates(newHoverStates);
            }}

            style={{display: "flex",
                    flexDirection: "row",
                    backgroundColor: "white",
                    border: 0,
                    fontSize:14,
                    paddingTop: 20,
                    paddingLeft: 0,
                    listStyle: "none",
                    color: "black",
                    cursor: "pointer",
                     textDecoration: hoverStates[index] ? "underline" : "none"}}>
                  {element}
              </Link>
          </Button>

    )
  })

  return (
    <div>{listItems}</div>
  )
}


