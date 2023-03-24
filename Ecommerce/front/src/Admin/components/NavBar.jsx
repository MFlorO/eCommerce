import { useLocation, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Badge, Toolbar } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { heightNavbar } from '../layout/AdminLayOut';
import HomeIcon from '@mui/icons-material/Home';




const NavBar = () => {

  const navigate = useNavigate()

  const { pathname } = useLocation()

  const pathnameSlice = pathname.charAt(17).toUpperCase()

  const nuevoPathname = pathnameSlice + pathname.slice(18)

  const color = 'black'



  return (
    <AppBar sx={{position: 'absolute', width: '80%', boxShadow:'none', background:'none'}}>
      <Toolbar sx={{height: `${heightNavbar}rem`}} >
        <Box sx={{display:"flex", width: '100%', flexDirection:"row", justifyContent:"flex-end",p:'1rem'}}>
          
         <Box sx={{display:"flex", width: '70%', flexDirection:"row", alignItems:'center'}}>
          <IconButton onClick={() => navigate(`/dashboard/admin`)} sx={{color: color}}><HomeIcon /></IconButton>
          / {pathnameSlice === '' ? 'Dashboard' : nuevoPathname}
         </Box>


         <Box sx={{display:"flex", width: '30%', flexDirection:"row", justifyContent:"space-around", alignItems:'center' }}>
           <Box sx={{ display: 'flex', width:'20rem'}}>
             <SearchIcon sx={{color: color}}/>
             <input style={{borderRadius:'10px', height:'2rem', border:'2px solid color', background:'none'}}/>
           </Box>

           <IconButton sx={{color: color}}>
             <Badge badgeContent={4}><NotificationsIcon /></Badge>
           </IconButton>

           <IconButton sx={{color: color}}>
            <SettingsIcon />
           </IconButton>
         </Box>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
