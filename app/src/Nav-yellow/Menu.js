import { Box, Button, Drawer } from '@mui/material'
import React from 'react'
import MobileDrawer from '../Navbar/MobileDrawer'
import MuiDrawer from '../Navbar/MuiDrawer'
import List from './List'
import styles from './Menu.module.css'
import menuAcquista from './MenuDrawer'


const Menu = () => {
  const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    function handleClose() {
        setOpen(false);
    }

  const items = [
    { id: 1, name: 'Acquista' },
    { id: 2, name: 'Scopri' },
    { id: 3, name: 'Aiuto' }
  ]




  return (
    <Box>

         <List onClick={handleOpen} className={styles.color} items={items} />

         <Drawer anchor={"left"}>
             <List  items={menuAcquista} />
        </Drawer>
        <MobileDrawer />
        <MuiDrawer />

    </Box>
  )
}

export default Menu;
