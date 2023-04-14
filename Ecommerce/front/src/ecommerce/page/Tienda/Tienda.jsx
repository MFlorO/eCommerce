import { EcommerceLayout } from "../../layout";
import { Filtros, Ordenamientos, Paginado, Productos, Buscador, Ubicacion } from "./components/"
import { Grid } from "@mui/material";
import { heighUbicacion } from "./components/Ubicacion";



const Tienda = () => {

  return (
    <Grid backgroundColor='#f3f3f3'>
    <EcommerceLayout>
    <Ubicacion />
      <Grid container justifyContent="space-between" mt={`${heighUbicacion + 1}rem`}>

          <Grid item xs={12} sm={3} minHeight={{xs:'3rem', sm:'17rem'}}>
            <Grid container >
              <Buscador />
              <Filtros />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={8.5}>
            <Grid container justifyContent={{xs:'center', sm:'space-between'}} gap={{xs:3, sm:0}}>
              <Ordenamientos />
              <Paginado />
            </Grid>

            <Grid item mt='2rem'>
              <Productos />
            </Grid>
          </Grid>
      </Grid> 
    </EcommerceLayout>
    </Grid>
  );
};

export default Tienda;
