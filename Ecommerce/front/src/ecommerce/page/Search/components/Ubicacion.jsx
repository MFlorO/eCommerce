import { Grid, Typography } from "@mui/material"
import { heightNavbar } from "../../../layout/EcommerceLayout"


const Ubicacion = () => {

  return (
    <Grid container sx={{width:'100%'}} height={{xs:'3rem', sm:'3rem'}} mt={`${heightNavbar + 2}rem` } backgroundColor='#e7e7e7' alignItems='center'>
      
      <Grid container paddingLeft={{xs:1.5, sm:10}} paddingRight={{xs:1.5, sm:10}}>
        <Typography variant="h3">Tienda</Typography>
      </Grid>

    </Grid>
  )
}

export default Ubicacion