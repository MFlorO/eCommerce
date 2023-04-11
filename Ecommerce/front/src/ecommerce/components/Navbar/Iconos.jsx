import { Grid, IconButton } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Iconos = () => {

  return (
    <Grid container alignItems='center'>
      <Grid>
        <IconButton sx={{color:'black'}}><PersonIcon fontSize='medium'/></IconButton>
      </Grid>
      <Grid>
        <IconButton sx={{color:'black'}}><ShoppingCartIcon fontSize='medium'/></IconButton>
      </Grid>
   </Grid>
  )
}
