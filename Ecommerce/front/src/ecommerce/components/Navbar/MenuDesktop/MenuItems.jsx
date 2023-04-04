import React, { useState } from 'react';
import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Button, Link, Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles';


const StyledButton= styled(Button)(({ theme }) => ({
  color: 'black',
  fontFamily: theme.typography.h3.fontFamily,
  fontWeight: theme.typography.h3.fontWeight,
  fontSize: theme.typography.h3.fontSize,

  '&:hover': {
    color: theme.palette.secondary.main,
    backgroundColor: 'none',
    boxShadow: 'none',
  },
  '&:active': {
    color: theme.palette.primary.dark,
  },
}));



const MenuItems = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonRect, setButtonRect] = useState(null);

  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setButtonRect(rect);
    setAnchorEl(buttonRef.current);
  }

  const handleMouseLeave = () => setAnchorEl(null);



  return (
      <>    
      <StyledButton ref={buttonRef} aria-controls="menu" aria-haspopup="true" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
        TIENDA
      </StyledButton>

      <Menu
        id="menu"
        anchorEl={anchorEl}
        anchorReference="anchorPosition" //establece que la posición del ancla se definirá mediante una coordenada (coordenadas x e y) en relación con el borde superior izquierdo de la ventana gráfica (viewport).
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        anchorPosition={ buttonRect ? { top: buttonRect.bottom, left: buttonRect.left } : undefined }
        // anchorOrigin={{    //posición de origen del menú
        //   vertical: 'bottom',
        //   horizontal: 'left',
        // }}
        // transformOrigin={{   //posición en la que el menú se transforma en la pantalla
        //   vertical: 'top',
        //   horizontal: 'left',
        // }}
      >
        <MenuItem onClick={handleMouseLeave}>CATEGORIAS</MenuItem>
        <MenuItem onClick={handleMouseLeave}>MUJER</MenuItem>
        <MenuItem onClick={handleMouseLeave}>SALE</MenuItem>
        <MenuItem onClick={handleMouseLeave}>TEMPORADA INVIERNO 2023</MenuItem>
      </Menu>
    </>
  )
}

export default MenuItems;
