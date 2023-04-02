import { Grid, Link, Button, List, ListItem, ListItemText, Divider} from "@mui/material";
import { heightNavbar } from "../../layout/EcommerceLayout";
import { useRef } from "react";

const NavBar = () => {

  const ref = useRef()
  console.log(ref)

  return (
   <header>
   <Grid container alignItems='center' position='absolute' sx={{ height:`${heightNavbar}rem`, backgroundColor: "black"}} component='header'>
      <Grid item backgroundColor='blue'>LOGO</Grid>
      <Grid container direction='row' justifyContent='center' alignItems='center' gap={4} backgroundColor='grey'>
        <Grid><Button>TIENDA</Button></Grid>
        <Grid><Link>TALLES</Link></Grid>
        <Grid><Link>CONTACTO</Link></Grid>
        <Grid><Link>SHOP</Link></Grid>
        <Grid><Link>DEVOLUCIONES</Link></Grid>
      </Grid>
      <Grid  backgroundColor='green'>ICONOS</Grid>
   </Grid>
   </header>
  );
};

export default NavBar;





// export const NavBarItems = () => {

//   const style = {
//     width: '100%',
//     maxWidth: 360,
//     bgcolor: 'background.paper',
//   };


//   return (
//       <List sx={style} component="nav" aria-label="mailbox folders">
//       <ListItem button>
//         <ListItemText primary="TIENDA" />
//       </ListItem>
//       <Divider />
//       <ListItem button divider>
//         <ListItemText primary="TALLEs" />
//       </ListItem>
//       <ListItem button>
//         <ListItemText primary="CONTACTO" />
//       </ListItem>
//       <Divider light />
//       <ListItem button>
//         <ListItemText primary="DEVOLUCIONES" />
//       </ListItem>
//     </List>
//   );
// };