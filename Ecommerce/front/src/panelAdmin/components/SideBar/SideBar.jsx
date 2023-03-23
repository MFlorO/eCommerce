import { mainListItems, secondaryListItems } from "./ListItems";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import Drawer from '@mui/material/Drawer';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { drawerWidth } from "../../layout/AdminLayOut";




const Drawer = styled(MuiDrawer)(
  ({ theme }) => ({
    '& .MuiDrawer-paper': {
      zIndex: 10,
      position: 'relative',
      marginLeft: '2rem',
      marginTop: '2rem',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      height: 'max-content',
      borderRadius: '30px 0px 0px 30px',
      border: '1px solid #E0E0E0',
      // transition: theme.transitions.create('width', {
      //   easing: theme.transitions.easing.sharp,
      //   duration: theme.transitions.duration.enteringScreen,
      // }),
      boxSizing: 'border-box',
     
    },
  }),
);



const SideBar = () => {
  return (
    <Drawer variant="permanent">
      <Toolbar 
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        aca va el nombre de la empresa
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </Drawer>
  );
};

export default SideBar;
