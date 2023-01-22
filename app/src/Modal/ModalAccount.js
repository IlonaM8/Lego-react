
import React, { useState } from 'react'
import { Avatar, Box, Button, ButtonGroup,  Link,  Modal, Typography } from '@mui/material'

import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';



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
    <Box onClick={ (e) => setOpen(true)}
      sx={{
        width: 20,
        color: "black"
      }}>
      {/* <ContactsIcon sx={{ display: { xs: "none", sm: "none", md: "block"}, cursor: "pointer", width: 20}}/> */}

      <svg sx={{ cursor: "pointer", width: 20}} width="20" height="22" viewBox="0 0 20 22" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill-rule="nonzero" fill="none"><rect stroke="#2C2C2C" stroke-width="1.5" fill="#FFCF00" x="4.875" width="8.25" height="6.038" rx=".729"></rect><rect stroke="#2C2C2C" stroke-width="1.2" fill="#FFCF00" x="3.75" y="14.34" width="10.5" height="5.66" rx=".729"></rect><path d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z" stroke="#2C2C2C" stroke-width="1.5" fill="#FFCF00"></path><path d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z" fill="#2C2C2C"></path></g></svg>

     </Box>
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
