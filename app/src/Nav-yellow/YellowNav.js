import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ModalHeart from '../Modal/ModalHeart'
import InputSearch from './InputSearch'
import Menu from './Menu'


export default function YellowNav() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "block"}}}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor: "#FFCF00", color: "black" }}>
          <Avatar
                sx={{width:50, height:50}}
                variant="square"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png'
            />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                <Menu />
          </Box>
          <Box sx={{flexGrow: 0, display: "flex", gap: 2, alignItems: "center", paddingRight: 5}}>
            <InputSearch />
            <ModalHeart />
            <Box sx={{display: "flex", gap: 0.5}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" aria-hidden="true" class="Icon__StyledSVG-sc-lm07h6-0 jRfmwl MainBarstyles__ActionIcon-sc-1cg7sjw-16 kfAPxF"><g fill="currentColor" fill-rule="evenodd"><path d="M4 3.512v5.804c0 .377.349.684.779.684.43 0 .779-.307.779-.684V3.512C5.558 2.33 6.653 1.368 8 1.368c1.347 0 2.442.962 2.442 2.144v5.804c0 .377.35.684.78.684.43 0 .778-.307.778-.684V3.512C12 1.575 10.206 0 8 0S4 1.575 4 3.512z"></path><path d="M2.46 6.33c-.269 0-.489.194-.5.441L1.435 18.19a.436.436 0 00.131.332.52.52 0 00.348.149h12.151c.276 0 .501-.207.501-.462l-.525-11.436c-.011-.248-.23-.442-.5-.442H2.46zM14.448 20l-12.974-.001a1.591 1.591 0 01-1.064-.462 1.357 1.357 0 01-.408-1.03L.56 6.372C.595 5.602 1.277 5 2.11 5h11.78c.835 0 1.516.602 1.551 1.372l.56 12.197c0 .789-.697 1.431-1.553 1.431z"></path></g></svg>
              <Typography sx={{ fontSize: 12}}>(0)</Typography>
          </Box>
          </Box>
 

        </Toolbar>
      </AppBar>
    </Box>
  )
}
