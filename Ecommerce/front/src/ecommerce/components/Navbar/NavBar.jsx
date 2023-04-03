import { useState, useEffect, useRef   } from "react";
import { Iconos } from "./Iconos";
import { Menu } from "./Menu";
import { heightNavbar } from "../../layout/EcommerceLayout";
import logo from "../../../../public/img/logo.jpg"
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
      const menuPosition = menuRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;

      if (scrollPosition > menuPosition) {
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
   <Grid container alignItems='center' position='fixed' sx={{ height:`${heightNavbar}rem`, width:`100%` }} 
   component='header' zIndex={100} ref={menuRef} style={menuStyles}
   >
      <Grid item xs={2}>
        <img src={logo} alt={logo} style={{width:'5rem', height:'3rem', marginLeft:'2rem'}}/>
      </Grid>

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