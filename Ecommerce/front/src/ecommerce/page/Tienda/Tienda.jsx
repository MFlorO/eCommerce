import { EcommerceLayout } from "../../layout";
import { Filtros, Ordenamientos, Paginado, Productos, Buscador, Ubicacion } from "./components/"
import { Grid, Typography, useTheme, useMediaQuery,  } from "@mui/material";



const Tienda = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints

  return (
    <EcommerceLayout>
      <Ubicacion />
      <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={3.5} justifyContent='space-around' border={!isSmallScreen && '2px solid #cdcdcd'} height='max-content' p={2}>
            <Buscador />
            <Filtros />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Grid container justifyContent='space-between'>
              <Ordenamientos />
              <Paginado />
            </Grid>

            <Grid item xs={12} sm={12} >
              <Typography>Cantidad de productos</Typography>
              <Productos />
            </Grid>
          </Grid>
      </Grid> 
    </EcommerceLayout>
  );
};

export default Tienda;
