import { Link as RouterLink } from "react-router-dom";
import MenuItems from './MenuItems';

import { Grid, Link } from '@mui/material'
import { styled } from '@mui/material/styles';


const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  color: 'black',
  fontFamily: theme.typography.h3.fontFamily,
  fontWeight: theme.typography.h3.fontWeight,
  fontSize: theme.typography.h3.fontSize,

  '&:hover': {
    color: theme.palette.secondary.main,
  },
  '&:active': {
    color: theme.palette.primary.dark,
  },
}));


const Menu = () => {

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' gap={2} backgroundColor='grey'>
      <MenuItems />
      <Grid><StyledLink component={RouterLink} to={'/talles'}>TALLES</StyledLink></Grid>
      <Grid><StyledLink component={RouterLink} to={'/comocomprar'}>CÓMO COMPRAR</StyledLink></Grid>
      <Grid><StyledLink component={RouterLink} to={'/contacto'}>CONTACTO</StyledLink></Grid>
      <Grid><StyledLink component={RouterLink} to={'/devoluciones'}>DEVOLUCIONES</StyledLink></Grid>

  </Grid>
  )
}

export default Menu;
