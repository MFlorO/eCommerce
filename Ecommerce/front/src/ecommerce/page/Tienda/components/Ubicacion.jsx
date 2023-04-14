import { Link as LinkMUI, useNavigate } from 'react-router-dom'
import { heightNavbar } from '../../../layout/EcommerceLayout'

import { Grid, Typography, Link, IconButton } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';

export const heighUbicacion = heightNavbar

const Ubicacion = () => {

  const navigate = useNavigate()

  return (
    <Grid position='absolute' container alignItems='center' backgroundColor='#e7e7e7' mb={{xs:'3rem'}} top={`${heighUbicacion}rem`} 
    width='100%' justifyContent={{xs:'center', sm:'start'}} paddingLeft={{xs:'2rem', sm:'5rem'}} 
    >
    <IconButton onClick={() => navigate(`/`)} sx={{color: 'black'}}><HomeIcon /></IconButton>
    <Link component={LinkMUI} to={`/tienda`} style={{textDecoration:'none'}} >
      <Typography variant="h3">/ Tienda</Typography>
    </Link>
    </Grid>
  )
}

export default Ubicacion