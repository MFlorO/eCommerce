import { EcommerceLayout } from "../../layout";
import { NewArrivals, Sale } from "./view";
import { Grid } from "@mui/material";
import { Banner, LandingPageFooter } from "./components";

const LandingPage = () => {
  return (
    <>
      <Banner />
      <EcommerceLayout>
        <LandingPageFooter margin={true} />

        <Grid 
          container
          justifyContent="space-around"
          sx={{ width: "100%" }}
          gap={5}
          pt={{ xs: "4rem", sm: "6rem" }}
          pb={{ xs: "8rem", sm: "10rem" }}
        >
          <NewArrivals />
        </Grid>

        <Grid container pb={{ xs: "8rem", sm: "10rem" }}>
          <Sale />
        </Grid>

        <LandingPageFooter margin={false} />
      </EcommerceLayout>
    </>
  );
};

export default LandingPage;
