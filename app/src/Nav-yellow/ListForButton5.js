import React, { useState } from "react";

const data = [
    "Per gli adulti",
    "Animali",
    "Arts and Crafts",
    "Edifici",
    "Auto",
    "Programma per i bambini",
    "Draghi",
    "Fantasy",
    "Film",
    "Gaming",
    "Impara a costruire",
    "Musica",
    "Ninja",
    "Prescolare",
    "Principesse",
    "Eroi della vita reale",
    "Robot per i bambini",
    "Prodotti stagionali",
    "Spazio",
    "Sport",
    "STEM",
    "Treni",
    "Viaggi",
    "Programmi TV",
    "Veicoli"
]

export default function ListForButton5() {
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
            <h5>VISUALIZZA TUTTI GLI INTERESSI</h5>
            {ListData}
        </div>
    )
}

