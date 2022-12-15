
import React, { useState } from 'react'
import { Avatar, Box, Button, ButtonGroup,  Link,  Modal, Tooltip, Typography } from '@mui/material'

import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import ContactsIcon from '@mui/icons-material/Contacts';


const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

// const UserBox = styled(Box)({
//     display:"flex",
//     alignItems:"center",
//     gap:"10px",
//     marginBottom: "20px"
// })



export default function ModalAccount() {
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
    <Tooltip onClick={ (e) => setOpen(true)}
      sx={{
        width: 20, 
        color: "black",

        }}>
    
      <ContactsIcon sx={{ display: { xs: "none", sm: "none", md: "block"}, cursor: "pointer"}}/>
    
     </Tooltip>
        <StyledModal 
        open={open}
        onClose={ (e) => setOpen(false)}
        
        >
        <Box 
         width={400} 
         height={520} 
        bgcolor={"background.default"} 
        color={"text.primary"}
          padding={2} borderRadius={0}>
            <Box paddingBottom={4} style={{display: "flex", justifyContent: "space-between"}}>
            <Avatar 
                sx={{width:50, height:50}} 
                variant="square"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png'
            />
            <Typography variant='h6' color="black" textAlign="left" fontWeight={400} paddingBottom={2}>Accedi al tuo account LEGO®</Typography>
            <CloseIcon style={{cursor: "pointer"}} onClick={(e) => setOpen(false)}/>
            </Box>
           
           <ButtonGroup 
            fullWidth
             variant="contained" 
             aria-label="outlined primary button group">
            
            <Button 
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               variant="outlined" sx={{height:"50px", cursor: "pointer"}}
               style={{
                backgroundColor: isHovering ? '#e1f5fe' : '',
                color: isHovering ? 'black' : '',
                border: "1px #0288d1 solid",
              }}
                >Accedi</Button>
            </ButtonGroup>

            <Box padding={1} paddingBottom={4} paddingTop={4} sx={{display: "flex", gap: "30px", alignItems: "center"}}>
             <Typography  variant='span' fontWeight={400}>Non hai un account?</Typography>
             <Link style={{cursor: "pointer", textDecoration: 'none'}}>Registrati</Link>
            </Box>

            <Box padding={1} paddingBottom={4} paddingTop={4}  sx={{display: "flex", gap: "30px", alignItems: "center"}}>
            <Avatar 
                sx={{width:130, height:100}} 
                variant="square"
                src='https://www.lego.com/_next/static/images/orderStatus-04af015821d59ffa6ce06de624f1bff4.png'
            />
             <Link style={{cursor: "pointer", textDecoration: 'none' }}>Verifica stato ordine</Link>
            </Box>

            <Box padding={1} paddingBottom={4} paddingTop={4}  sx={{display: "flex", gap: "30px", alignItems: "center"}}>
            <Avatar 
                sx={{width:130, height:70}} 
                variant="square"
                src='https://www.lego.com/_next/static/images/vipBadge-36e0c97b98c85bc85322156b168f5f53.png'
            />
            <Box sx={{display: "flex", flexDirection: "column",  gap: 1}}>
            <Typography  variant='span' fontWeight={400}>Diventa un socio LEGO® VIP</Typography>
            <Link style={{cursor: "pointer", textDecoration: 'none' }}>Premi VIP LEGO® </Link>
            </Box>
            </Box>


            
            

        </Box>
        </StyledModal>
    </>
  )
}
