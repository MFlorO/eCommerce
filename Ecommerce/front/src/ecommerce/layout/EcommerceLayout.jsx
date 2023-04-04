import { Grid } from "@mui/material"
import { Banner, Footer, NavBar } from "../components";



export const heightNavbar = 6
export const heightFooter = 11


const EcommerceLayout = ({children}) => {
  return (
    <Grid container sx={{minHeight:'100vh', height:'max-content', maxWidth:'100vw'}}>
      <Grid container sx={{height:'100%'}}></Grid>
      <NavBar />
      <Banner />
      <Grid container paddingLeft={20} paddingRight={20} justifyContent="space-around" alignItems='center' 
      sx={{minHeight:'20rem', height:'max-content'}} mt={`${heightNavbar}rem `}
      >
        {children}
      </Grid>
      <Footer /> 
    </Grid>  
  )
}

export default EcommerceLayout;