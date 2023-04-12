import { EcommerceLayout } from "../../layout";
import { Filtros, Ordenamientos, Paginado, Productos, Search, Ubicacion } from "./components/"
import { Box, Grid, Typography } from "@mui/material";

const Tienda = () => {


  return (
    <>
      <Ubicacion />
      <EcommerceLayout>

        <Grid
          container
          justifyContent="space-between"
          pt={{ xs: "4rem", sm: "6rem" }}
          gap={{xs:8, sm:0}}
          // minHeight='20rem'
        >

          <Grid item xs={12} sm={3.5} justifyContent='space-around' border='2px solid black' height='max-content'>
            <Search />
            <Filtros />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Grid container justifyContent='space-between'>
              <Typography>Cantidad de productos</Typography>
              <Ordenamientos />
              <Paginado />
            </Grid>

            {/* LISTADO DE PRODUCTOS */}
            <Grid item xs={12} sm={12} >
              <Productos />
            </Grid>
          </Grid>
        </Grid>

      </EcommerceLayout>
    </>
  );
};

export default Tienda;