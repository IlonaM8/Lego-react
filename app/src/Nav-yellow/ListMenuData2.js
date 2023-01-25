

import { Button, IconButton, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import CardsInsideModal from '../Modal/CardsInsideModal';



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

//state variabile for openModal
// const [modalOpen, setModalOpen] = useState(false);

// function openModal() {
//   setModalOpen(true);
// }


const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };




      const listItems = data.map((element, index) => {
        return (
                <Button style={{display: "flex",
                                 justifyContent: "start",
                                backgroundColor: "white",
                                textTransform: "none",
                                fontSize:14,
                                paddingTop: 2
                              }}>
                <Link to={null} onClick={element === "Decorator 3D DOTS" ? handleOpen : null}

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
    <>
         <Modal
              open={open}
              onClose={handleClose}
              fullScreen={true}
              style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
              >
              <div style={{ backgroundColor: '#b68dc9', padding: '20px', width: "100%", height: "100%" }}>
              <IconButton onClick={handleClose} style={{ position: "absolute", top: "15px", right: "15px"}}>
              <CloseIcon />
              </IconButton>
                  <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <img
                     alt=''
                     src='https://www.lego.com/cdn/cs/set/assets/bltcae9c6b65cb4a378/logo.png?width=250'
                     sx={{width: "250px"}}
                      />
                      <Box sx={{maxWidth: 972}}>
                      <Typography variant='h4' sx={{color: "white", fontWeight: "600", display: "flex", textAlign: "right", flexWrap: "wrap",  paddingRight: 8}}>Progetta e condividi le tue creazioni con LEGO® 3D Decorator</Typography>
                      </Box>

                  </Box>
                  <Box>
                    <CardsInsideModal
                       image="https://www.lego.com/cdn/cs/set/assets/blt2ea6262537507fd5/Image_Disney_Bracelet_Desktop.png?width=400"
                       text="Card text 1"
                        />
                  </Box>

              </div>
       </Modal>
    <div>{listItems}</div>
    </>
  )
}


