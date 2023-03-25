import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { ListaCategorias } from './components';
import { AdminLayOut } from "~/Admin/layout"

import { startGetTodasCategorias } from '~/redux/slice/admin/thunks';

import { Container, Grid, Paper, Button, List, ListSubheader, ListItem } from "@mui/material";




const Categorias = () => {

  const { categorias } = useSelector( state => state.admin)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetTodasCategorias(categorias))
  }, [])
  
  const navigate = useNavigate()
  
  return (
    <AdminLayOut>
    <Container sx={{width:'70%', display:'flex', justifyContent:'center' }}>
      <Grid container spacing={3} >
  
      <Grid item xs={12}>
        <Paper sx={{ p: 2, textAlign:'center' }}>
          <Button onClick={() => navigate(`/dashboard/admin/categorias/crearCategoria`)}>CREAR CATEGORIAS</Button>
        </Paper>
      </Grid>
  
      <Grid item xs={12} >
       <Paper sx={{ p: 2,display: "flex", flexDirection: "column", height: 'max-content', justifyContent:'center' }}>
        <List sx={{ width: '100%'}} subheader={<ListSubheader>Lista de Categorías</ListSubheader>} >

          {categorias.payload?.map(c => (
            <ListItem key={c.id}>
              <ListaCategorias {...c} />
            </ListItem>
          ))} 
        </List>
       </Paper>
      </Grid>
  
      </Grid>
      </Container>
    </AdminLayOut>
  )
}

export default Categorias;