import React from 'react';

import { Drawer as MuiDrawer, ListItem,  ListItemText, List, ListItemButton, Divider } from '@mui/material';

const  MobileDrawer = () => {
  return (
    <MuiDrawer>
         <List>
            {['Home', 'Acquista', 'Scopri', 'Aiuto'].map((text, index) =>(
              <>
                <ListItem key={text} >
                    <ListItemButton>
                        <ListItemText primary={text}/>
                    </ListItemButton>
                </ListItem>
                <Divider />
            </>
            ))}
        </List>
    </MuiDrawer>
  )
}

export default MobileDrawer;
