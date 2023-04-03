import useProductos from "~/Hook/useProductos";
import { EcommerceLayout } from "../../layout";
import { PublicidadLayout } from "./layout";
import { Grid } from "@mui/material";
import { LandingPageFooter } from "./components";

const LandingPage = () => {
  const productos = useProductos();

  return (
    <EcommerceLayout>
      <Grid container justifyContent="space-around" sx={{ width: "100%" }}>
        <PublicidadLayout titulo={"NEW ARRIVALS"} productos={productos} />
        <PublicidadLayout titulo={"SALE"} productos={productos} />
      </Grid>
      <LandingPageFooter />
    </EcommerceLayout>
  );
};

export default LandingPage;
