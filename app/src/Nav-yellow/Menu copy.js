import { Box, Button, Divider, Drawer,  ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'


import List from './List'
import styles from './Menu.module.css'




const pages = ['ACQUISTA', 'SCOPRI', 'AIUTO'];


const Menu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);


  return (
    <Box>
       <Box sx={{ paddingLeft: 6, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button className={styles.btn}
                key={page}

                sx={{ paddingLeft: 4, paddingRight: 4, my: 0, "&:hover": {
                     textDecoration: 'underline',backgroundColor: "#FFCF00",
                     boxShadow: 'none' },   display: 'flex' }}
                   onClick={() => setDrawerOpen(!drawerOpen)}
              >

                {page}
              </Button>
            ))}
        </Box>



        <Drawer PaperProps={{
              sx: {
                width: 750
              }}}
             anchor='left'
             onClose={() => setDrawerOpen(false)}
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
