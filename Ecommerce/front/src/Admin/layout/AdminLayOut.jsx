import { SideBar } from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { Grid } from '@mui/material';



export const heightNavbar = 7
export const widthSideBar = 18
export const heightSidebar = 35

const AdminLayOut = ({ children }) => {
  
  return (
    <Grid container justifyContent= "space-between" bgcolor='#EBEAEA' >
      
      <SideBar />

      <NavBar />

      <Grid items direction='column' justifyContent='space-between' sx={{ minHeight:'100vh ', height:"max-content", width:'100%' }}
      mt={{ xs: `${heightNavbar + heightSidebar + 2 }rem`, sm:`${heightNavbar}rem`}} ml={{xs:'none', sm:`${widthSideBar}rem`}} >
        <Grid items >{children}</Grid>
        <Grid items ><Footer /></Grid>
      </Grid>

    </Grid>
  );
}

export default AdminLayOut;
