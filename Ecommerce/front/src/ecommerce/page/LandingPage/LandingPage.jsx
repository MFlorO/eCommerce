import { EcommerceLayout } from "../../layout";
import { PublicidadView } from "./view";
import { Grid } from "@mui/material";
import { LandingPageFooter } from "./components";

const LandingPage = () => {


  return (
    <EcommerceLayout>
      <Grid container justifyContent="space-around" sx={{ width: "100%" }} gap={5} paddingBottom={{xs:'8rem', sm:'12rem'}}  >
        <PublicidadView titulo={"NEW ARRIVALS"} />
        <PublicidadView titulo="SALE" />
      </Grid>
      <LandingPageFooter />
    </EcommerceLayout>
  );
};

export default LandingPage;
