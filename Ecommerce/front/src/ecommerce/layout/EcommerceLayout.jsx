import { Grid } from "@mui/material"
import { Footer, NavBar } from "../components";



export const heightNavbar = 3



const EcommerceLayout = ({children}) => {
  return (
    <Grid container paddingLeft={3} paddingRight={3} justifyContent="space-between" sx={{minHeight:'100vh', height:'max-content'}}>
      <NavBar />
      {children}
      <Footer />
    </Grid>  
  )
}

export default EcommerceLayout;