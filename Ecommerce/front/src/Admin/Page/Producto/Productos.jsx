import { useNavigate } from "react-router-dom";
import { AdminLayOut } from "~/Admin/layout"
import useProductos from '~/Hook/useProductos';

import { ListaProductos } from './components';
import { Container, Grid, Paper, Button, Box, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


const Productos = () => {

 const productos = useProductos()

 const navigate = useNavigate()

 return (
  <AdminLayOut>
  <Container>
    <Grid container spacing={3}>

    <Grid item xs={12} >
       <Paper sx={{ p: 2,display: "flex", flexDirection: "column", height:'max-content', justifyContent:'center' }}>
        
        <Stack sx={{flexDirection:"row"}}>
          <Button onClick={() => navigate(`/dashboard/admin/productos/crearProducto`) }><AddIcon />{""} Crear Producto</Button>
        </Stack>

        {productos?.payload?.map(p => (
            <Box key={p.codigo}>
              <ListaProductos {...p} />
            </Box>
          ))} 

       </Paper>
      </Grid>

    </Grid>
    </Container>
  </AdminLayOut>
)}

export default Productos;