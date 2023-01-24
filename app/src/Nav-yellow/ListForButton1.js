import React, { useState } from "react";

const data = [
"Architecture",
"Batman™",
"BrickHeadz",
"Brick Sketches™",
"City",
"Classic",
"Creator 3-in-1",
"Creator Expert",
"DC",
"Disney™",
"Topolino e amici Disney",
"Lightyear di Disney e Pixar",
"DOTS",
"DUPLO®",
"Friends",
"Frozen",
"Harry Potter™",
"Ideas",
"Jurassic World™",
"LEGO® Art",
"LEGO® Avatar",
"LEGO® Education",
"LEGO® Icons",
"LEGO® Super Mario™",
"Lord of the Rings™",
"Marvel",
"MINDSTORMS®",
"Minecraft®",
"Minifigure",
"Minions",
"Monkie Kid™",
"NINJAGO®",
"Powered UP",
"SERIOUS PLAY®",
"Speed Champions",
"Spider-Man",
"Star Wars™",
"Technic",
"VIDIYO™",
"Xtra"
]

export default function ListForButton1() {
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

            style={{ fontSize: 14,
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
            <h5>VISUALIZZA TUTTI I TEMI</h5>
            {ListData}
        </div>
    )
}
