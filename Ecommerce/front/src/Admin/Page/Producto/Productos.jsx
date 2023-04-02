import { useNavigate } from "react-router-dom";
import { AdminLayOut } from "~/Admin/layout"
import useProductos from '~/Hook/useProductos';

import { ListaProductos } from './components';
import { Container, Grid, Paper, Button, Box, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Fragment } from "react";


const Productos = () => {

 const productos = useProductos()

 const navigate = useNavigate()

 return (
  <AdminLayOut>
  <Container>
  <Grid container spacing={3} sx={{ overflowY: "hidden" }} >

  <Grid item xs={12} >
    <Paper sx={{ p: 2, minHeight:'40rem' }}>
      <Button onClick={() => navigate(`/dashboard/admin/productos/crearProducto`) }><AddIcon />{""} Crear Producto</Button>
      {productos?.map(p => <Fragment key={p.codigo}><ListaProductos {...p} /></Fragment>)} 
    </Paper>
  </Grid>

  </Grid>
  </Container>
  </AdminLayOut>
)}

export default Productos;