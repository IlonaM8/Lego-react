import React, { useState } from "react";

const data = [
   "Accessori",
   "Zaini e portavivande",
   "Libri",
    "Portachiavi",
    "Giocattoli di peluche",
   "Novità",
    "Bustina",
    "Puzzle e giochi da tavolo",
    "Gioco di ruolo e costumi",
    "Cancelleria",
    "Contenitori"
]

export default function ListForButton4() {
    const [hoverStates, setHoverStates] = useState(new Array(data.length).fill(false));

    const ListData = data.map((element, index) =>{
        return(
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

            style={{  display: "flex", flexDirection: "column", fontSize: 14,
                       cursor: "pointer",
                        backgroundColor: "white",
                        border: 0,
                        paddingTop: 12,
                       textDecoration: hoverStates[index] ? "underline" : "none"
                    }}>{element}
            </button>
        )
    })
    return(
        <div>
            <h5>VISUALIZZA TUTTO IL MERCHANDISING LEGO</h5>
            {ListData}
        </div>
    )
}

