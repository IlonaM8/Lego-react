
import React, { useState } from 'react'

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
const [hoverStates, setHoverStates] = useState(new Array(data.length).fill(false));


      const listItems = data.map((element, index) => {
        return (
                <button
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
                        backgroundColor: "white",
                        border: 0,
                        fontSize:14,
                        paddingTop: 20,
                         paddingLeft: 0,
                         listStyle: "none",
                         cursor: "pointer",
                         textDecoration: hoverStates[index] ? "underline" : "none"}}>
                      {element}
              </button>

        )
      })

  return (
    <div>{listItems}</div>
  )
}


