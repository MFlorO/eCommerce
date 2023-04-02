import { Iconos } from "./Iconos";
import { MenuItem } from "./Menu";
import { heightNavbar } from "../../layout/EcommerceLayout";

import { Grid } from "@mui/material";


const NavBar = () => {

  return (
   <Grid container alignItems='center' sx={{ position:'absolute', height:`${heightNavbar}rem`,width:`100%`, border: '2px solid black'}} 
   component='header' 
   >
      <Grid item backgroundColor='blue' xs={2}>LOGO</Grid>

      <Grid item xs={8} component='nav'>
        <MenuItem />
      </Grid>

      <Grid item xs={2}>
      <Iconos />
      </Grid>

   </Grid>
  );
};

export default NavBar;