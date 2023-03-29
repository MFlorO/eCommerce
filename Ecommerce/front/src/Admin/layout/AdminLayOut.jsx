import { SideBar } from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { Grid } from '@mui/material';



export const heightNavbar = 7
export const widthSideBar = 18
export const heightSidebar = 35

const AdminLayOut = ({ children }) => {
  
  return (
    <Grid container  justifyContent= "space-between" minHeight='100vh'height= "max-content" bgcolor='#EBEAEA' >
      
      <SideBar />

      <NavBar />

      <Grid items  mt={{ xs: `${heightNavbar + heightSidebar + 2 }rem`, sm:`${heightNavbar}rem`}} ml={{xs:'none', sm:`${widthSideBar}rem`}} >
        <Grid items xs={12}>{children}</Grid>
        <Grid items xs={12}><Footer /></Grid>
      </Grid>

    </Grid>
  );
}

export default AdminLayOut;
