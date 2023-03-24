import { useNavigate } from "react-router-dom";
import { AdminLayOut } from "~/Admin/layout"
import { Container, Grid, Paper, Button } from "@mui/material";



const Categorias = () => {
  const navigate = useNavigate()
  
  return (
    <AdminLayOut>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
  
      <Grid item xs={4} md={4} lg={2}>
        <Paper sx={{ p: 2, height: 100 }}>
          <Button onClick={() => navigate(`/dashboard/admin/categorias/crearCategoria`) }>CREAR CATEGORIAS</Button>
        </Paper>
      </Grid>
  
      <Grid item xs={12} >
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 300 }}>
          ACA VA LA LISTA DE TODAS LAS CATEGORIAS
        </Paper>
      </Grid>
  
  
  
  
      </Grid>
      </Container>
    </AdminLayOut>
  )
}

export default Categorias