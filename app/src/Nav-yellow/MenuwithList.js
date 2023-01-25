import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ListMenuData1 from './ListMenuData1';
import ListMenuData2 from './ListMenuData2';
import ListMenuData3 from './ListMenuData3';
import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';




export default function TemporaryDrawer() {
  // const [state, setState] = React.useState(false);

  //state for list(anchor)
  const [activeButton, setActiveButton] = React.useState(0);
  const [state, setState] = React.useState({
    "Acquista": false,
    "Scopri": false,
    "Aiuto": false
  })
 //state variabile
  const [activeTab, setActiveTab] = React.useState(0);




  //Tabs functions
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  }


  const toggleDrawer = (anchor, open) => (event) => {

    setState({ ...state, [anchor]: open });
    //  setActiveButton(anchor);
  };

  const handleClick = (index, anchor) =>{
    setActiveButton(index);
    setActiveTab(index);
    setState({...state, [anchor]: true});
  }


  // const list = (anchor) => (
  //   <Box sx={{ width: 650 }} role="presentation" >
  //       <Box style={{ display: 'flex', flexDirection: 'row', paddingLeft: 110}}>
  //         {["Acquista", "Scopri", "Aiuto"].map((text, index) => (
  //           <Box key={text} disablePadding style={{ paddingLeft: 0}}>
  //           <ListItemButton
  //                     onClick={() => handleClick(index, anchor)}
  //                     style={{ display: 'flex'}}>
  //             <ListItemText
  //                      primary={text}  style={{color: 'green', display: 'flex', padding: 20}}/>
  //           </ListItemButton>
  //           {activeButton === index && (
  //             <div style={{position: "relative"}}>
  //               <div style={{position: "absolute", top: "0", left: "0", width: 260, paddingLeft: 30}}>
  //                 {(()=>{
  //                   switch (text) {
  //                     case "Acquista":
  //                       return <ListMenuData1/>;
  //                     case "Scopri" :
  //                       return <ListMenuData2/>;
  //                       case "Aiuto":
  //                       return <ListMenuData3/>;
  //                     default:
  //                       return null;
  //                   }
  //                   })()}
  //               </div>

  //             </div>
  //        )}
  //         </Box>
  //         ))}
  //       </Box>
  //   </Box>
  // );



  //Tab panel component

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      {['Acquista', 'Scopri', 'Aiuto'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{color: "black", paddingLeft: 60 }}
                  onClick={toggleDrawer(anchor, true)}>{anchor}
          </Button>
          <Drawer
            variant="persistent"
            anchor='left'
            open={state[anchor]}
            // onClose={toggleDrawer(anchor, false)}
          >
            <DrawerHeader style={{display: "flex", justifyContent: "space-between"}}>
              <Box >
                 <Avatar
                 style={{position: "fixed", top: 80, left: 30 }}
                sx={{width:55, height:55}}
                variant="square"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png'
            />
              </Box>

              <IconButton>
                 <CloseIcon
                   onClick={toggleDrawer(anchor, false)}
                   onKeyDown={toggleDrawer(anchor, false)}/>
              </IconButton>
            </DrawerHeader>

            {/* {list(anchor)} */}

            <Tabs style={{paddingLeft: 130, paddingRight: 230}} value={activeTab} onChange={handleTabChange}>
              <Tab label="Acquista" onClick={() => handleClick(0, "Acquista")}  />
              <Tab label="Scopri" onClick={() => handleClick(1, "Scopri")} />
              <Tab label="Aiuto" onClick={() => handleClick(2, "Aiuto")}/>
            </Tabs>

            <TabPanel style={{paddingLeft: 130 }} value={activeTab} index={0}>
                  <ListMenuData1/>
            </TabPanel>
            <TabPanel style={{paddingLeft: 130, paddingRight: 20}} value={activeTab} index={1}>
                   <ListMenuData2/>
            </TabPanel>
            <TabPanel style={{paddingLeft: 130, paddingRight: 20}} value={activeTab} index={2}>
                  <ListMenuData3/>
            </TabPanel>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
