
import { Avatar, Box, Button, ButtonGroup,  Link,  Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'


import styled from '@emotion/styled';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CloseIcon from '@mui/icons-material/Close';





const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom: "20px"
})



export default function ModalHeart() {
    const [open, setOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);


    const handleMouseEnter = () => {
        setIsHovering(true);
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
      };


  return (
    <>
    <Tooltip onClick={ (e) => setOpen(true)}>

      <FavoriteBorderRoundedIcon
         sx={{ display: { xs: "none", sm: "none", md: "block"},
         cursor: "pointer",
         width: 40,
         }} />

     </Tooltip>
        <StyledModal
        open={open}
        onClose={ (e) => setOpen(false)}

        >
        <Box
         width={500}
         height={360}
         border="none"
        //  bgcolor="black"
        bgcolor={"background.default"}
        color={"text.primary"}
          padding={2} borderRadius={0}>
            <Box style={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant='h6' color="black" textAlign="left" fontWeight={400} paddingBottom={2}>Il mio account</Typography>
            <CloseIcon style={{cursor: "pointer"}} onClick={(e) => setOpen(false)}/>
            </Box>

            <UserBox>
            <Avatar
                sx={{width:70, height:70}}
                variant="square"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png'
            />
             <Typography variant='span' fontWeight={400}>Accedi al tuo account LEGO®</Typography>
            </UserBox >


           <ButtonGroup
            color="secondary"
            fullWidth
             variant="contained"
             aria-label="outlined primary button group">

            <Button
               color='primary'
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               variant="contained" sx={{height:"60px", cursor: "pointer"}}
               style={{
                backgroundColor: isHovering ? 'white' : '',
                color: isHovering ? 'black' : '',
                border: "1px #0288d1 solid"
              }}
                 >Accedi</Button>
            </ButtonGroup>
            <Box padding={1} paddingTop={2}>
            <Typography lineHeight={1.8} variant='span' fontWeight={400}>Per creare e consultare un lista dei desideri, accedi al tuo account LEGO®</Typography>
            </Box>
            <Box padding={1} sx={{display: "flex", gap: 2}}>
            <Typography variant='span' fontWeight={400}>Non hai un account?</Typography>
            <span><Link style={{cursor: "pointer", textDecoration: 'none'}}>Registrati</Link></span>
            </Box>

        </Box>
        </StyledModal>
    </>
  )
}
