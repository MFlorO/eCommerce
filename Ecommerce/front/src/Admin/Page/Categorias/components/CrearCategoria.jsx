import { AdminLayOut } from "~/Admin/layout"
import { Container, Grid, Paper } from "@mui/material";


const CrearCategoria = () => {

  return (
    <AdminLayOut>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
  
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 300 }}>
          FORMULARIO DE CREACION DE CATEGORIA
        </Paper>
      </Grid>
  
      </Grid>
      </Container>
    </AdminLayOut>
  )
}

export default CrearCategoria;