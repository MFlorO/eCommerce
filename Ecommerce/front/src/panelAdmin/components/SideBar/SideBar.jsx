import { mainListItems, secondaryListItems } from "./ListItems";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';




const SideBar = () => {
  return (
    <Box 
    sx={{
      boxShadow:' 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderRadius:'30px 0px 0px 30px', border:'1px solid #E0E0E0',
      width:'85%', height:'max-content',  background:'white', 
    }}
    >
      <Toolbar > aca va el nombre de la empresa </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </Box>
  );
};

export default SideBar;
