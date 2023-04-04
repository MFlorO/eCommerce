import { useState, useEffect, useRef } from "react";
import { Iconos } from "./Iconos";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";
import { heightNavbar } from "../../layout/EcommerceLayout";
import logo from "/img/logo.jpg"
import Search from "./Search";

import { Grid } from "@mui/material";





const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const menuStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: !isScrolled ? 'none' : '#fff',
    boxShadow: ' rgba(50, 50, 93, 0.25) 0px 2px 8px -3px' ,
    transition: 'background-color 0.3s ease',
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 200) {
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


  return (
   <Grid container alignItems='center' position='fixed' sx={{ minHeight:`${heightNavbar}rem`, height:'max-content', width:`100vw`, maxWidth:'100vw' }} 
   zIndex={100} ref={menuRef} style={menuStyles} gap={{xs:2, sm:0}} p={2} component='header' 
   >
      <Grid item xs={5} sm={1.5} justifyContent='center' alignItems='center' paddingLeft={{xs:'1rem', sm:'2rem'}} order={{xs:0}} >
        <img src={logo} alt={logo} style={{width:'5rem', height:'3rem'}}/>
      </Grid>

      {/* Menu para Desktop */}
      <Grid item xs={7} display={{xs:'none', sm:'block'}} component='nav' order={{xs:0, sm:1}} >
        <MenuDesktop />
      </Grid>
      
      {/* Menu para movile */}
      <Grid item xs={2} display={{xs:'block', sm:'none'}} order={{xs:3}} component='nav'>
        <MenuMobile />
      </Grid>

      <Grid item xs={0} sm={1} order={{xs:1, sm:3}} >
        <Iconos />
      </Grid>
     
       <Grid item xs={12} sm={2} alignSelf={{xs:'end', sm:'center'}} order={{xs:5, sm:2}} justifyContent='center'>
        <Search />
      </Grid>
   </Grid>
  );
};

export default NavBar;