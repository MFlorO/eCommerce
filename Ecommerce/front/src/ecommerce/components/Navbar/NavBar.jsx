import { Iconos } from "./Iconos";
import { Menu } from "./Menu";
import { heightNavbar } from "../../layout/EcommerceLayout";

import { Grid } from "@mui/material";


const NavBar = () => {

  return (
   <Grid container alignItems='center' sx={{ position:'absolute', height:`${heightNavbar}rem`,width:`100%`, border: '2px solid black'}} 
   component='header' zIndex={100}
   >
      <Grid item backgroundColor='blue' xs={2}>LOGO</Grid>

      <Grid item xs={8} component='nav'>
        <Menu />
      </Grid>

      <Grid item xs={2}>
      <Iconos />
      </Grid>

   </Grid>
  );
};

export default NavBar;