import { heightNavbar } from "../../../layout/EcommerceLayout"
import { Link as LinkMUI } from 'react-router-dom'
import { Grid, Typography, Link } from "@mui/material"


const Ubicacion = () => {

  return (
    <Grid container sx={{width:'100%'}} height={{xs:'3rem', sm:'3rem'}} mt={`${heightNavbar + 2}rem` } backgroundColor='#e7e7e7' alignItems='center'>
      
      <Grid container paddingLeft={{xs:1.5, sm:10}} paddingRight={{xs:1.5, sm:10}}>
        <Link component={LinkMUI} to={`/tienda`} style={{textDecoration:'none'}}>
           <Typography variant="h3">Tienda</Typography>
        </Link>
      </Grid>

    </Grid>
  )
}

export default Ubicacion