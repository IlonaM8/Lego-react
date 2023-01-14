import { Button, ButtonGroup, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography} from '@mui/material'
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react'




export default function MuiDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isHovering, setIsHovering] = useState(false);


    const handleMouseEnter = () => {
        setIsHovering(true);
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
      };


  return (
    <>
    <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='logo'
          onClick={() => setIsDrawerOpen(true)}>
             <Typography>Acquista</Typography>
    </IconButton>
    <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='logo'
          onClick={() => setIsDrawerOpen(true)}>
             <Typography>Scopri</Typography>
    </IconButton>
    <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='logo'
          onClick={() => setIsDrawerOpen(true)}>
             <Typography>Aiuto</Typography>
    </IconButton>
    <Drawer PaperProps={{
              sx: {
                width: 750
              }}}
      anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}
    >
      <ButtonGroup
            fullWidth
             variant="contained"
             aria-label="outlined primary button group">

            <Button
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               variant="outlined" sx={{height:"50px", cursor: "pointer"}}
               style={{
                backgroundColor: isHovering ? '' : '#e1f5fe',
                color: isHovering ? 'black' : '',
                border: "1px #0288d1 solid",
              }}
                >Area Giochi</Button>
            </ButtonGroup>

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

        <List>
            {['Account', 'VIP'].map((text, index) =>(
              <>
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemText primary={text}/>
                    </ListItemButton>
                </ListItem>
                <Divider />
            </>
            ))}
        </List>




        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
                Hello side panel
            </Typography>
        </Box>

    </Drawer>
    </>
  )
}
