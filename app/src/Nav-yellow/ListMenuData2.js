

import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const data = [
          "I nostri valori",
          "le nostre app",
          "Le nostre riviste",
          "Tutti i temi LEGO",
          "Per gli adulti",
          "Programma premi VIP",
          "Decorator 3D DOTS",
          "LEGO® Mosaic Maker",
          "Idee regalo LEGO®"
        ]

export default function ListMenuData2() {
  //the initial valjue is an array of the same lenght as data array
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
                <Link to={element === "Decorator 3D DOTS" ? "/Decorator" : null}

                       onMouseEnter={() => {
                      const newHoverStates = [...hoverStates]; //spread operator - spreads the elments ot the hoverStates into a new array - creates a new copy of the original array.
                      newHoverStates[index] = true;
                      setHoverStates(newHoverStates);
                    }}

                    onMouseLeave={(e) => {
                      const newHoverStates = [...hoverStates];
                      newHoverStates[index] = false;
                      let nextIndex = data.indexOf(e.relatedTarget.innerText);
                      newHoverStates[nextIndex] = false;
                      setHoverStates(newHoverStates);
                }}

                style={{display: "flex",
                        backgroundColor: "white",
                        border: 0,
                        fontSize:14,
                        paddingTop: 20,
                        paddingLeft: 0,
                         listStyle: "none",
                         color: "black",
                         cursor: "pointer",
                         textDecoration: hoverStates[index] ? "underline" : "none"}}
                    >
                      {element}
              </Link>
              </Button>

        )
      })

  return (
    <div>{listItems}</div>
  )
}


