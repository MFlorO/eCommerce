import { Grid } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Iconos = () => {
  return (
    <Grid container direction='row' gap={1.5}  justifyContent='center' alignItems='center'>
        <Grid><SearchIcon /></Grid>
        <Grid><PersonIcon /></Grid>
        <Grid><ShoppingCartIcon /></Grid>
   </Grid>
  )
}
