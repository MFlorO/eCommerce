import { Grid } from "@mui/material"
import { Banner, Footer, NavBar } from "../components";



export const heightNavbar = 6
export const heightFooter = 11


const EcommerceLayout = ({children}) => {
  return (
    <Grid container sx={{minHeight:'100vh', height:'max-content', maxWidth:'100vw', width:'100%'}}>
      <Grid container sx={{height:'100%'}}></Grid>
      <NavBar />
      <Banner />
      <Grid container paddingLeft={{xs:1.5, sm:10}} paddingRight={{xs:1.5, sm:10}} justifyContent="space-around" alignItems='center' 
      sx={{minHeight:'20rem', height:'max-content', width:'100%'}} 
      >
        {children}
      </Grid>
      <Footer /> 
    </Grid>  
  )
}

export default EcommerceLayout;