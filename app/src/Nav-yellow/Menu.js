import { Box, Button, ButtonGroup, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import MobileDrawer from '../Navbar/MobileDrawer'
import MuiDrawer from '../Navbar/MuiDrawer'
import List from './List'
import styles from './Menu.module.css'
import menuAcquista from './MenuDrawer'


const Menu = () => {



  return (
    <Box>
      <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='logo'
          >
             <Typography>Acquista</Typography>
    </IconButton>
    <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='logo'
          >
             <Typography>Scopri</Typography>
    </IconButton>
    <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='logo'
         >
             <Typography>Aiuto</Typography>
    </IconButton>

         {/* <List onClick={handleOpen} className={styles.color} items={items} /> */}

         <Drawer PaperProps={{
              sx: {
                width: 750
              }}}
             anchor='left'
    >


        <List>
            {['Home', 'Acquista', 'Scopri', 'Aiuto'].map((text, index) =>(
              <>
                <ListItem key={text} >
                    <ListItemButton>
                        <ListItemText primary={text}/>
                    </ListItemButton>
                </ListItem>
                <Divider/>
            </>
            ))}
        </List>



        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
                Hello side panel
            </Typography>
        </Box>

    </Drawer>



    </Box>
  )
}

export default Menu;
