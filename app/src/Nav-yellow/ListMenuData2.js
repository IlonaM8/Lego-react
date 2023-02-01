

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
                  <Box style={{paddingTop: 76, display: "flex", gap: 20, overflowY: "scroll", paddingBottom: 50 }}>
                    <CardsInsideModal
                       image="https://www.lego.com/cdn/cs/set/assets/blt2ea6262537507fd5/Image_Disney_Bracelet_Desktop.png?width=400"
                       text="Multipack Bracciali Topolino e amici"
                        />
                        <CardsInsideModal
                       image="https://www.lego.com/cdn/cs/set/assets/blte7b8a5fb0028abea/DisneyFrame_400x480.png?width=400"
                       text="Il Kit Back to School di Topolino e Minnie"
                       bgColor="#01b1af"
                        />

                         <CardsInsideModal
                       image="https://www.lego.com/cdn/cs/set/assets/bltdc6e5eb8556e38de/bananaPenHolder_v2.png?width=400"
                       text="Portapenne banana"
                       bgColor="#d54551"
                        />

                       <CardsInsideModal
                       image="https://www.lego.com/cdn/cs/set/assets/bltb27c9ea9a9e9a003/croppedCreativeDesignerBox_v2.png?width=400"
                       text="Designer Box creative"
                       bgColor="#01a0e1"
                        />

                      <CardsInsideModal
                       image="https://www.lego.com/cdn/cs/set/assets/blteaa709b0b9f13fd4/keyHanger_v2.png?width=400"
                       text="Portachiavi creativo"
                       bgColor="#a82a75"
                        />

                       <CardsInsideModal
                       image="https://www.lego.com/cdn/cs/set/assets/blt638707535a80ed94/bagTag_v2.png?width=400"
                       text="Dolce tentazioni - Braccialetto e bag tag"
                       bgColor="#01b1af"
                        />

                       <CardsInsideModal
                       image="https://www.lego.com/cdn/cs/set/assets/blt057ad63e3c1794f9/creativePartyKit_v2.png?width=400"
                       text="Kit Party creativo"

                        />
                  </Box>

              </div>
       </Modal>
    <div>{listItems}</div>
    </>
  )
}


