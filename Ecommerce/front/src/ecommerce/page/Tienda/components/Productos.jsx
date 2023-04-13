import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material"
import useProductos from "~/Hook/useProductos";
import { Fragment } from "react";



const Productos = () => {


  const { productosCopia } = useProductos()


  
  return (
    <Grid mt='3rem' p={2} border='2px solid #DBDBDB' >
      
      { 
      productosCopia?.map( p => (
        <Fragment  key={p.codigo}>
          {p.nombre}
        </Fragment>
      ))
      
      }

    </Grid>
  )
}

export default Productos