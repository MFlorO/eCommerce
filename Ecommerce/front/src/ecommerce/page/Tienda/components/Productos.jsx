import { Grid, Typography } from "@mui/material"
import useProductos from '../../../Hook/useProductos'
import { Fragment } from "react";



const Productos = () => {

  const { productosCopia } = useProductos()

  const cantidadProductos = productosCopia.length
  
  return (
    <Grid backgroundColor='white'>

    <Typography variant="h4">{cantidadProductos} productos</Typography>
      
      <Grid height='15rem'>
      { 
      productosCopia?.map( p => (
        <Fragment  key={p.codigo}>
          {p.nombre}
        </Fragment>
      ))
      
      }
      </Grid>

    </Grid>
  )
}

export default Productos