import { ItemsPrincipales, ItemsSecundarios } from './ListItems';
import { heightNavbar } from '../../layout/AdminLayOut';

import { Box, Toolbar, Divider, List } from '@mui/material/Box';



const SideBar = () => {
  return (
    <Box 
    sx={{ width:'15rem', background:'white', position:'fixed', top:`${heightNavbar}rem`,
      boxShadow:' 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius:'30px 0px 0px 30px',
      border:'1px solid #E0E0E0' }}
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
