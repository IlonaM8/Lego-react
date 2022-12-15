import { Avatar, Box, Button, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import ModalAccount from '../Modal/ModalAccount'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SlideShow from './SlideShow'



export default function WhiteBar() {
    const [isHovering, setIsHovering] = useState(false);




    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };


  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",  paddingTop: 0, paddingLeft: 3, paddingBottom: 1, paddingRight: 4}}>
         
         <Box sx={{display: { xs: "none", sm: "none", md: "block"}}}>
         <Button
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           style={{
            backgroundColor: isHovering ? 'white' : '',
            color: isHovering ? 'black' : '',
          }}
           variant='contained'sx={{ height: 26, width: 131, display: "flex", alignItems: "center", gap: 1, bgcolor: "#b3e5fc", ":hover": "#e1f5fe", position: "fixed", 
           top: 30,
           left: 80,}}>
            <KeyboardBackspaceIcon  sx={{color: "black", height: 16}}/>
            <Typography sx={{fontSize: 10, color: "black"}}>Area Giochi</Typography>
         </Button>
         </Box>
         
        <SlideShow/>
         
         <Box  sx={{
                  position: "fixed", 
                  top: 30, 
                  right: 180,
                  display: "flex", alignItems: "center",
                  }}>
         <ModalAccount />
         <Typography sx={{ display: { xs: "none", sm: "none", md: "block"}, fontSize: 13, color: "black", paddingLeft: 1}}>Account</Typography>
         </Box>
         
         <Box
            sx={{
                display: "flex", alignItems: "center",
                position: "fixed", 
                top: 30,
                right: 110,
            }}>
                

        <Avatar sx={{ display: { xs: "none", sm: "none", md: "block"}, width: 20, height: 20}} alt="lego-logo" src="https://www.lego.com/_next/static/images/vip-73aacc5347bc84c586d662f654c3a629.png" variant="square" />
        <Typography sx={{ display: { xs: "none", sm: "none", md: "block"}, fontSize: 13, color: "black", paddingLeft: 1}}>VIP</Typography>
     </Box>
        

    </Box>
  )
}
