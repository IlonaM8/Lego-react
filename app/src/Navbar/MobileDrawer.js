import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';

import { Drawer as MuiDrawer, ListItem,  ListItemText, List, ListItemButton, Divider, Typography, Drawer, IconButton, ListItemIcon, Avatar, ButtonGroup, Button } from '@mui/material';
import { Box } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const drawerWidth = 375;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

const  MobileDrawer = () => {
 
  const [open, setOpen] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);


  const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };





  return (
    <>
    <IconButton onClick={handleDrawerOpen} sx={{display: "flex", flexDirection: "column"}}>
      <MenuIcon sx={{height: 20, cursor: "pointer"}} />
      <Typography sx={{fontSize: 8, textTransform: "uppercase"}}>Menu</Typography>
    </IconButton>
    <Drawer
       sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="temporary"
      anchor="left"
      open={open}
      onClose={ handleDrawerClose}>


    <DrawerHeader>
      <Typography sx={{display: "flex", alignContent: "center", paddingLeft: 1, fontSize: 15, textTransform: "uppercase"}}>Menu</Typography>
      <Box>
         <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </Box>
        </DrawerHeader>
        <Divider sx={{bgcolor: "#ffc400", p: 0.04, marginBottom: 3}} />
        <ButtonGroup

           sx={{ cursor: "pointer",  paddingLeft: 2}}

            //  variant="contained"
             aria-label="outlined primary button group">

            <Button
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               variant="contained" sx={{height:"40px", cursor: "pointer", width: "95%"}}
               style={{
                backgroundColor: isHovering ? 'white' : '#90caf9',
                color: isHovering ? 'black' : 'black',
                fontSize: 11
              }}
                >Area Giochi
                </Button>
            </ButtonGroup>
        <List>
          {['Home', 'Acquista', 'Scopri', 'Aiuto'].map((text, index) => (
            <>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                 <ListItemText primary={text} />
                <ListItemIcon>
                 {index === 1 || index === 2  ||index === 3 ?  <NavigateNextIcon /> : null }
                </ListItemIcon>

              </ListItemButton>
            </ListItem>
            <Divider />
            </>
          ))}
        </List>

        <List>
          {['Account', 'Vip'].map((text, index) => (
            <>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ?
                                    <svg sx={{ cursor: "pointer", width: 20}} width="20" height="22" viewBox="0 0 20 22" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill-rule="nonzero" fill="none"><rect stroke="#2C2C2C" stroke-width="1.5" fill="#FFCF00" x="4.875" width="8.25" height="6.038" rx=".729"></rect><rect stroke="#2C2C2C" stroke-width="1.2" fill="#FFCF00" x="3.75" y="14.34" width="10.5" height="5.66" rx=".729"></rect><path d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z" stroke="#2C2C2C" stroke-width="1.5" fill="#FFCF00"></path><path d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z" fill="#2C2C2C"></path></g></svg>
                                      :         <Avatar sx={{ display: "flex", width: 20, height: 20}} alt="lego-logo" src="https://www.lego.com/_next/static/images/vip-73aacc5347bc84c586d662f654c3a629.png" variant="square" />
                                    }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
            </>
          ))}
        </List>
        <List>
          {['La mia lista dei desideri', 'Il mio carello (1)'].map((text, index) => (
            <>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
            </>
          ))}
        </List>
        <List>
          {['Italia'].map((text, index) => (
            <>
            <ListItem key={text} disablePadding sx={{paddingLeft: 0}}>
              <ListItemButton>
                <ListItemIcon>
                {index === 0 ?  <LocationOnIcon /> : null }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
            </>
          ))}
        </List>
    </Drawer>


    </>
  )
}

export default MobileDrawer;
