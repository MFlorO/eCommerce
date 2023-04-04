import { Grid, IconButton } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Iconos = () => {
  return (
    <Grid container direction='row' gap={1}  justifyContent='center' alignItems='center'>
        <IconButton sx={{color:'black'}}><SearchIcon fontSize='large'/></IconButton>
        <IconButton sx={{color:'black'}}><PersonIcon fontSize='large'/></IconButton>
        <IconButton sx={{color:'black'}}><ShoppingCartIcon fontSize='large'/></IconButton>
   </Grid>
  )
}
