import { useState } from "react";

import { IconButton, Drawer, List, ListItem, ListItemText, Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';





const MenuMobile = () => {

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => () => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setOpenDrawer(!openDrawer);
   };



   const drawerItems = [
    { text: 'Inicio' },
    { text: 'Información' },
    { text: 'Contacto' },
  ];



  return (
    <>
    <IconButton sx={{color:'black'}} onClick={() => setOpenDrawer(!openDrawer)} ><MenuIcon /></IconButton>

    <Drawer 
     display={{xs:'block', sm:'none'}}
     anchor='right' variant='temporary' 
     open={openDrawer} onClose={toggleDrawer}
    >
    <Grid paddingTop='1rem'>
      <Grid borderBottom='solid 2px #DBDBDB' paddingBottom='1rem'>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{color:'black'}}><CloseIcon /></IconButton>
      </Grid>
      <List>
        {drawerItems.map((item) => (
            <ListItem button key={item.text}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
      </List>
      </Grid>
    </Drawer>
  </>

  )
}

export default MenuMobile