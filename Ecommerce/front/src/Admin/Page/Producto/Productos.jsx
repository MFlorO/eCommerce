import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { AdminLayOut } from "~/Admin/layout"
import { startGetTodosProductos } from '~/redux/slice/admin/thunks';

import { ListaProductos } from './components';
import { Container, Grid, Paper, Button, Box, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


const Productos = () => {

  const { productos } = useSelector( state => state.admin)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetTodosProductos(productos))
  }, [])
  

 const navigate = useNavigate()

 return (
  <AdminLayOut>
  <Container maxWidth="lg">
    <Grid container spacing={3}>

    <Grid item xs={12} >
       <Paper sx={{ p: 2,display: "flex", flexDirection: "column", maxHeight: '30rem', height:'max-content', justifyContent:'center' }}>
        
        <Stack sx={{flexDirection:"row"}}>
          <Button onClick={() => navigate(`/dashboard/admin/productos/crearProducto`) }><AddIcon />{""} Crear Producto</Button>
        </Stack>

        {productos.payload?.map(p => (
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