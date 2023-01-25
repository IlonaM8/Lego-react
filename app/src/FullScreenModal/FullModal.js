import { IconButton, Modal } from '@mui/material';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';



export default function FullModal() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };



    return (
      <React.Fragment>
        <button onClick={handleOpen}>Open Modal</button>


       <Modal
            open={open}
            onClose={handleClose}
            fullScreen={true}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <div style={{ backgroundColor: 'white', padding: '20px', width: "100%", height: "100%" }}>
            <IconButton onClick={handleClose} style={{ position: "absolute", top: "15px", right: "15px"}}>
             <CloseIcon />
            </IconButton>
                <h2>Modal Content</h2>
                <p>This is an example of a fullscreen modal.</p>
            </div>
        </Modal>


      </React.Fragment>
    );
  }
