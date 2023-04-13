import { Link as LinkMUI, useNavigate } from 'react-router-dom'
import { heightNavbar } from '../../../layout/EcommerceLayout'

import { Grid, Typography, Link, IconButton } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';



const Ubicacion = () => {

  const navigate = useNavigate()

  return (
    <Grid container alignItems='center' backgroundColor='#e7e7e7' mb={{xs:'3rem'}} height='3rem' mt={`${heightNavbar}rem`} width='100%' justifyContent={{xs:'center', sm:'start'}}>
      
      <IconButton onClick={() => navigate(`/`)} sx={{color: 'black'}}><HomeIcon /></IconButton>
      <Link component={LinkMUI} to={`/tienda`} style={{textDecoration:'none'}} >
        <Typography variant="h3">/ Tienda</Typography>
      </Link>
      
    </Grid>
  )
}

export default Ubicacion