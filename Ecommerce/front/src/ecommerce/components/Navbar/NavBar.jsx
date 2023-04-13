
import { useState, useEffect, useRef } from "react";
import { Iconos } from "./Iconos";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";
import { heightNavbar } from "../../layout/EcommerceLayout";
import logo from "/img/logo.jpg"
import { Link as LinkMUI, useLocation } from 'react-router-dom'
import Search from "./Search";

import { Grid, Link } from "@mui/material";
import { useTheme, useMediaQuery } from '@mui/material';




const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const { pathname } = useLocation()


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints


  const menuStyles = {
    position:`${pathname === "/" ? 'fixed' : 'relative'}`,
    top: 0,
    transition: 'background-color 0.3s ease',
    backgroundColor: isSmallScreen ? '#FFF' : !isScrolled ? 'none' : '#fff', 
    boxShadow: isScrolled ? 'rgba(50, 50, 93, 0.25) 0px 2px 8px -3px' :'none'
  };



  return (
   <Grid container sx={{ width: '100vw', minHeight:`${heightNavbar}rem`}} gap={'0px 17px'} pl={{xs:0,sm:15}} pb={2} 
   alignItems='center' zIndex={100} ref={menuRef} component='header' style={menuStyles} 
   >
    <Grid item xs={4} sm={2} order={{xs:1 , sm:0}} width={{xs:'0px', sm:'0rem'}} height={{xs:'1rem', sm:'4rem'}}>
      <Link component={LinkMUI} to={'/'}>
        <img src={logo} alt={logo} style={{width:'100%', height:'100%'}}/>
      </Link>

    </Grid>

    {/* Menu para Desktop */}
    <Grid item xs={0} sm={6} display={{xs:'none', sm:'flex'}} component='nav' order={{xs:0, sm:1}}>
      <MenuDesktop />
    </Grid>
      
    {/* Menu para movile */}
    <Grid item xs={3} display={{xs:'flex', sm:'none'}} order={{xs:0}} component='nav'>
      <MenuMobile />
    </Grid>

    <Grid item xs={0} sm={0} order={{xs:2, sm:3}}>
      <Iconos />
    </Grid>
     
    <Grid item xs={0} sm={2} alignSelf={{xs:'end', sm:'center'}} order={{xs:5, sm:2}} pl={{xs:3, sm:0}}>
      <Search />
    </Grid>
   </Grid>
  );
};

export default NavBar;