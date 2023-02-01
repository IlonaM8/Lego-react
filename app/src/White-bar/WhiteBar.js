import { Avatar, Box, Button, CssBaseline, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import ModalAccount from '../Modal/ModalAccount'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SlideShow from './SlideShow'
import { Container } from '@mui/system';




export default function WhiteBar() {
    const [isHovering, setIsHovering] = useState(false);




    const handleMouseEnter = () => {
        setIsHovering(true);
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
      };


  return (
    <>
    <CssBaseline />
    <Container maxWidth="xl">


    <Box sx={{display: "flex", justifyContent: { xs: "center", sm: "center", md: "space-between"} , alignItems: "center"}}>

         <Box sx={{display: { xs: "none", sm: "none", md: "block"}}}>
         <Button
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           style={{
            backgroundColor: isHovering ? 'white' : '',
            color: isHovering ? 'black' : '',
          }}
           variant='contained'
           sx={{ height: 26,
            width: 131,
            display: "flex",
            alignItems: "center",
            gap: 1,
             bgcolor: "#b3e5fc", ":hover": "#e1f5fe"
           }}>
            <KeyboardBackspaceIcon  sx={{color: "black", height: 16}}/>
            <Typography sx={{fontSize: 10, color: "black"}}>Area Giochi</Typography>
         </Button>
         </Box>


        <SlideShow />

        <Box></Box>
        <Box sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  gap: 2
                  }}
        >
         <Box  sx={{
                  display: {xs: "none", sm: "none", md: "flex", lg: "flex"},
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer"
                  }}
          >
         <ModalAccount />

         <Typography sx={{ display: {xs: "none", sm: "none", md: "none", lg: "block"}, fontSize: 13, color: "black", paddingLeft: 1}}>Account</Typography>
         <Box sx={{
                  display: {xs: "none", sm: "none", md: "flex", lg: "flex"},
                  alignItems: 'center',
                  gap: 4,
                  height: 20,
                  width: 0,
                  border:  1,
                  color: 'black'
                }}
          >
           <Divider orientation="vertical" flexItem>
           </Divider>
          </Box>
         </Box>
         <Box
            sx={{
                display: "flex",
                 alignItems: "center",
                 gap: 2
            }}
          >
        <Avatar sx={{ display: { xs: "none", sm: "none", md: "block"}, width: 20, height: 20}} alt="lego-logo" src="https://www.lego.com/_next/static/images/vip-73aacc5347bc84c586d662f654c3a629.png" variant="square" />
        <Typography sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block"}, fontSize: 13, color: "black", paddingLeft: 1}}>VIP</Typography>
     </Box>


      </Box>

    </Box>
    </Container>
</>
  )
}
