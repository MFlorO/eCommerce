import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Badge, Toolbar } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';


const NavBar = () => {
  return (
    <AppBar position="absolute" sx={{width: '80%', boxShadow:'none', background:'none'}}>
      <Toolbar sx={{height:'7rem'}} >
        <Box sx={{display:"flex", width: '100%', flexDirection:"row", justifyContent:"flex-end"}}>
          
         <Box sx={{display:"flex", width: '70%', flexDirection:"row", alignItems:'center'}}>
          aca van las rutas
         </Box>


         <Box sx={{display:"flex", width: '30%', flexDirection:"row", justifyContent:"space-around", alignItems:'center' }}>
           <Box sx={{ display: 'flex', width:'20rem'}}>
             <SearchIcon sx={{color:'white'}}/>
             <input style={{borderRadius:'10px', height:'2rem', border:'2px solid #FFFFFF', background:'none'}}/>
           </Box>

           <IconButton sx={{color:'white'}}>
             <Badge badgeContent={4}><NotificationsIcon /></Badge>
           </IconButton>

           <IconButton sx={{color:'white'}}>
            <SettingsIcon />
           </IconButton>
         </Box>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
