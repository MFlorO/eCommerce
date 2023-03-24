import { AdminLayOut } from "~/Admin/layout"
import { Container, Grid, Paper, Button } from "@mui/material";


const CrearProducto = () => {

  return (
    <AdminLayOut>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
  
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 300 }}>
          FORMULARIO DE CREACION
        </Paper>
      </Grid>
  
      </Grid>
      </Container>
    </AdminLayOut>
  )
}

export default CrearProducto;