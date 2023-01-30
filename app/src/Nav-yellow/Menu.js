import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ListMenuData1 from './ListMenuData1';
import ListMenuData2 from './ListMenuData2';
import ListMenuData3 from './ListMenuData3';
import { Avatar } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';




export default function TemporaryDrawer() {

  //drawer state
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

 //state variabile
  const [activeTab, setActiveTab] = React.useState(0);


  const handleDrawerToggle = (tabIndex) => {
    setIsDrawerOpen(!isDrawerOpen);
    setActiveTab(tabIndex);
  }


  //Tabs functions
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  }




  const handleClick = (index) =>{
    setActiveTab(index);
  }



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
      {['Acquista', 'Scopri', 'Aiuto'].map((anchor, index) => (
        <React.Fragment key={anchor}>
          <Button style={{color: "black", marginLeft: 40, display: "flex",  alignItems: "center" }}
                   onClick={() => handleDrawerToggle(index)} >
                    {anchor}
          </Button>
          <Drawer
            variant="persistent"
            anchor='left'
            open={isDrawerOpen}
            onClose={handleDrawerToggle}
          >
            <DrawerHeader style={{display: "flex", justifyContent: "space-between"}}>
              <Box >
                <Link to="/">


                 <Avatar
                 style={{position: "fixed", top: 80, left: 30 }}
                sx={{width:55, height:55}}
                variant="square"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png'
            />
            </Link>
              </Box>

              <IconButton>
                 <CloseIcon
                   onClick={handleDrawerToggle}
                   onKeyDown={handleDrawerToggle}/>
              </IconButton>
            </DrawerHeader>

            {/* {list(anchor)} */}

            <Tabs style={{paddingLeft: 130, paddingRight: 230}} value={activeTab} onChange={handleTabChange}>
              <Tab label="Acquista" onClick={() => handleClick(0, "Acquista")}  />
              <Tab label="Scopri" onClick={() => handleClick(1, "Scopri")} />
              <Tab label="Aiuto" onClick={() => handleClick(2, "Aiuto")}/>
            </Tabs>

            <TabPanel style={{paddingLeft: 130 }} value={activeTab} index={0}>
                  <ListMenuData1 handleDrawerToggle={handleDrawerToggle}/>
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
