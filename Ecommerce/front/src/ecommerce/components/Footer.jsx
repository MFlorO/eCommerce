import { Grid } from "@mui/material"
import { heightFooter } from "../layout/EcommerceLayout"


const Footer = () => {
  return (
    <Grid container alignItems='center' justifyContent='center' alignSelf='end' sx={{backgroundColor:'#DBDBDB', height:`${heightFooter}rem`}} mt='3rem'>
      <Grid item>
        FOOTER
      </Grid>
    </Grid>
  )
}

export default Footer