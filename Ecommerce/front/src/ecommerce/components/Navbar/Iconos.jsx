import { Grid } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Iconos = () => {
  return (
    <Grid container direction='row' gap={1.5}  justifyContent='center' alignItems='center' backgroundColor='green'>
        <Grid><PersonIcon /></Grid>
        <Grid><SearchIcon /></Grid>
        <Grid><ShoppingCartIcon /></Grid>
        <Grid><FavoriteIcon /></Grid>
   </Grid>
  )
}
