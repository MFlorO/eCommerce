import { ItemsPrincipales, ItemsSecundarios } from './ListItems';
import { heightNavbar, heightSidebar, widthSideBar } from '../../layout/AdminLayOut';

import { Box, Toolbar, Divider, List } from '@mui/material';



const SideBar = () => {
  return (
    <Box 
    sx={{ width:`${widthSideBar}rem`, background:'white', top:`${heightNavbar}rem`, height:`${heightSidebar}rem`,
      boxShadow:' 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius:'30px 0px 0px 30px',
      border:'1px solid #E0E0E0' 
    }} left={{xs:'1rem', sm:'0.5rem'}} position={{xs:'absolute', sm:'fixed'}}
    >
      <Toolbar > aca va el nombre de la empresa </Toolbar>
      <Divider />
      <List component="nav">
        <ItemsPrincipales /> 
        <Divider sx={{ my: 1 }} />
        <ItemsSecundarios />
      </List>
    </Box>
  );
};

export default SideBar;
