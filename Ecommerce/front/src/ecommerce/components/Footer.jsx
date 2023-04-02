import { Grid } from "@mui/material"
import { heightFooter } from "../layout/EcommerceLayout"


const Footer = () => {
  return (
    <Grid container alignItems='center' alignSelf='end' sx={{backgroundColor:'red', height:`${heightFooter}rem`}}>
      <Grid item>
        FOOTER
      </Grid>
    </Grid>
  )
}

export default Footer