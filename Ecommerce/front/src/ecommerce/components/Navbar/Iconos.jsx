import { Grid, IconButton, useTheme, useMediaQuery } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Iconos = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints

  return (
    <Grid container direction='row' gap={1} alignItems='center'>
      <Grid>
        <IconButton sx={{color:'black'}}><PersonIcon fontSize={isSmallScreen ? 'medium' : 'large'}/></IconButton>
      </Grid>
      <Grid>
        <IconButton sx={{color:'black'}}><ShoppingCartIcon fontSize={isSmallScreen ? 'medium' : 'large'}/></IconButton>
      </Grid>
   </Grid>
  )
}
