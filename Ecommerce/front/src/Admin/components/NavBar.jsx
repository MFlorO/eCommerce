import { useLocation, useNavigate } from 'react-router-dom';
import { heightNavbar, widthSideBar } from '../layout/AdminLayOut';

import { Container, IconButton, Badge, Grid } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';




const NavBar = () => {

  const navigate = useNavigate()

  const { pathname } = useLocation()

  const pathnameSlice = pathname.charAt(17).toUpperCase()

  const nuevoPathname = pathnameSlice + pathname.slice(18)

  const color = 'black'


  return (
    <Container sx={{position: 'absolute', width: '90vw', height: `${heightNavbar}rem`, mt:'1rem'}} >
    <Grid container ml={{xs:'0', sm:`${widthSideBar + 1}rem`}} alignItems='center' justifyContent={{xs:'center', sm:'space-between'}} >
          
     <Grid flexDirection='row' alignItems='center'>
      <IconButton onClick={() => navigate(`/dashboard/admin`)} sx={{color: color}}><HomeIcon /></IconButton>/ {pathnameSlice === '' ? 'Dashboard' : nuevoPathname}
    </Grid>

    <Grid container direction='row' alignItems='center' justifyContent='center' width={{xs:'none', sm:'20%'}}>
      <SearchIcon sx={{color: color}}/>
      <input style={{borderRadius:'10px', height:'2rem', border:'2px solid color', background:'none'}} />
      <IconButton sx={{color: color}}><Badge badgeContent={4}><NotificationsIcon /></Badge></IconButton>
    </Grid>

    </Grid>
  </Container>
  );
};

export default NavBar;
