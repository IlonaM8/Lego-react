
import React, { useState } from 'react'
// import Box from '@mui/material/Box';
import ListForButton1 from './ListForButton1';
import ListForButton2 from './ListForButton2';
import ListForButton3 from './ListForButton3';
import ListForButton4 from './ListForButton4';
import ListForButton5 from './ListForButton5';
import ListForButton6 from './ListForButton6';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



const data = [
  "Set per tema",
  "Età ",
  "Prezzi",
  "Merchandising LEGO",
  "Interessi",
  "Pick and Build",
  "Set Esclusivi",
  "Novità",
  "I più venduti",
  "Home decor",
  "Sconti e offerte",
  "Disponibilità a breve",
  "Ultima occasione per acquistarli"
]

export default function ListMenuData1() {
  const [hoverStates, setHoverStates] = useState(new Array(data.length).fill(false));
  const [activeButton, setActiveButton] = React.useState(0);
  const [listVisibile, setListVisble] = React.useState(false);


      const listItems = data.map((element, index) => {
        return (
          <Button style={{display: "flex",
                          justifyContent: "start",
                          backgroundColor: "white",
                          textTransform: "none",
                          fontSize:14,
                          paddingTop: 2
                          }}>
              <Link to={element === "I più venduti" ? "/Venduti" : null}
                    key={index}
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
                    onClick={() => {
                      if(activeButton === index){
                        setListVisble(!listVisibile);
                      } else {
                        setActiveButton(index);
                        setListVisble(true)
                       
                      }
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
                      <div style={{ display: "flex",  alignItems: "center"}}>
                        {element}
                      </div>
                      <div>{index < 6 && <ArrowForwardIosIcon style={{ position: "fixed", left: "20rem", height: 10, width: 20, marginLeft: 20}}/>}</div>
              </Link>
              </Button>

        )
      })

  return (
    <div style={{width: "440px", display: "flex", flexDirection: "row"}}>
      <div style={{width: "60%"}}>{listItems}</div>
      <div style={{width: "40%"}}>
      {listVisibile && activeButton === 0 && <ListForButton1 />}
      {listVisibile && activeButton === 1 && <ListForButton2 />}
      {listVisibile && activeButton === 2 && <ListForButton3 />}
      {listVisibile && activeButton === 3 && <ListForButton4 />}
      {listVisibile && activeButton === 4 && <ListForButton5 />}
      {listVisibile && activeButton === 5 && <ListForButton6 />}
      </div>

    </div>
  )
}


