import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
// import AppBar from '@mui/material/AppBar';
import { Box, Typography, IconButton, Badge, Toolbar } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { drawerWidth } from "../layout/AdminLayOut";


const AppBar = styled(MuiAppBar)(({ theme }) => ({
  width: `calc(100% - (${drawerWidth}px + 2rem))`,
  // transition: theme.transitions.create(['width', 'margin'], {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
}));

const NavBar = () => {
  return (
    <AppBar position="absolute">
      <Toolbar sx={{height:'6rem'}}  >
        <Box display="flex" flexDirection="row" justifyContent="end">

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            // noWrap
            // sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>

          <IconButton><SettingsIcon /></IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={4}><NotificationsIcon/></Badge>
          </IconButton>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
