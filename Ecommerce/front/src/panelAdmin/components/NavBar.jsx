import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
// import AppBar from '@mui/material/AppBar';
import { Box, Typography, IconButton, Badge, Toolbar } from "@mui/material";
import { Home } from "@mui/icons-material/";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer - 10,
  width: "100wv",
  // transition: theme.transitions.create(['width', 'margin'], {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
}));

const NavBar = () => {
  return (
    <AppBar position="absolute">
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
          background: "red",
          height: "3rem",
        }}
      >
        <Box display="flex" flexDirection="row" justifyContent="end">
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4}>
              <Home />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
