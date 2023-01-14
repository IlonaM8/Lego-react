import { Drawer, MenuItem, Typography} from '@mui/material'
import { IconButton, MenuIcon } from '@mui/material';
import { Box } from '@mui/system'
import { useState } from 'react'


export default function MuiDrawerAiuto() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  return (
    <>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
        <Typography>Aiuto</Typography>
    </IconButton>
    <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}
    >
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
                Hello side panel
            </Typography>
        </Box>

    </Drawer>
    </>
  )
}
