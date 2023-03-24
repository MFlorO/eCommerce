import { useLocation, useNavigate } from 'react-router-dom';
import { heightNavbar } from '../layout/AdminLayOut';

import { AppBar, Box, IconButton, Badge, Toolbar } from "@mui/material";
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
    <AppBar sx={{position: 'absolute', width: '81%', boxShadow:'none', background:'none'}}>
      <Toolbar sx={{height: `${heightNavbar}rem`}} >
        <Box sx={{display:"flex", width: '100%', flexDirection:"row", justifyContent:"flex-end"}}>
          
         <Box sx={{display:"flex", width: '80%', flexDirection:"row", alignItems:'center'}}>
          <IconButton onClick={() => navigate(`/dashboard/admin`)} sx={{color: color}}><HomeIcon /></IconButton>
          / {pathnameSlice === '' ? 'Dashboard' : nuevoPathname}
         </Box>


         <Box sx={{display:"flex", width: '20%', flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
          
           <Box sx={{ display: 'flex', width:'20rem'}}>
             <SearchIcon sx={{color: color}}/>
             <input style={{borderRadius:'10px', height:'2rem', border:'2px solid color', background:'none'}}/>
           </Box>

           <IconButton sx={{color: color}}>
             <Badge badgeContent={4}><NotificationsIcon /></Badge>
           </IconButton>

         </Box>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
