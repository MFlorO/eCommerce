import { EcommerceLayout } from "../../layout";
import { Carousell, NewArrivals, Sale } from "./view";
import { Grid } from "@mui/material";
import { LandingPageFooter } from "./components";
import useProductos from "~/Hook/useProductos";





const LandingPage = () => {
  const productos = useProductos()

  return (
    <EcommerceLayout>
      <LandingPageFooter margin={true}/>
      <Grid container justifyContent="space-around" sx={{ width: "100%" }} gap={23} pt={{xs:'4rem', sm:'6rem'}} pb={{xs:'8rem', sm:'12rem'}}  >
        <NewArrivals />
        <Carousell tipo='autoplay' elementos={productos}/>
        <Sale />
      </Grid>
      <LandingPageFooter margin={false}/>
    </EcommerceLayout>
  );
};

export default LandingPage;
