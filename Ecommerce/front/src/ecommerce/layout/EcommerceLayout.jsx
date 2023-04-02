import { Grid } from "@mui/material"
import { Footer, NavBar } from "../components";



export const heightNavbar = 6
export const heightFooter = 10


const EcommerceLayout = ({children}) => {
  return (
    <Grid container sx={{minHeight:'100vh', height:'max-content'}}>
      <NavBar />
      <Grid container paddingLeft={3} paddingRight={3} justifyContent="space-around" alignItems='center' 
      sx={{minHeight:'20rem', height:'max-content'}} mt={`${heightNavbar}rem `}
      >
        {children}
      </Grid>
      <Footer /> 
    </Grid>  
  )
}

export default EcommerceLayout;