import { SideBar } from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

export const drawerWidth = 240;
const mdTheme = createTheme();

function AdminLayOut({ children }) {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box  sx={{
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "100vh",
        width: '100vw'
    }}>

        <SideBar />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100vh",
            width: `calc(100% - (${drawerWidth}px + 2rem))`,
          }}
        >
          <NavBar />

          {children}

          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AdminLayOut;
