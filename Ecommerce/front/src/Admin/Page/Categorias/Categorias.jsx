import { useCategorias } from "~/Hook";
import { useNavigate } from "react-router-dom";
import { ListaCategorias } from './components';
import { AdminLayOut } from "~/Admin/layout"


import { Container, Grid, Paper, Button, List, ListSubheader, ListItem, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';




const Categorias = () => {

  const categorias = useCategorias()
  const navigate = useNavigate()
  
  return (
    <AdminLayOut>
    <Container>
    <Grid container spacing={3}>

    <Grid item xs={12} >
       <Paper sx={{ display: "flex", flexDirection: "column", height: 'max-content', justifyContent:'center' }} p={{xs:'1', sm:'2'}}>

       <Stack sx={{flexDirection:"row"}}>
          <Button onClick={() => navigate(`/dashboard/admin/categorias/crearCategoria`) }><AddIcon />Crear Categoria</Button>
        </Stack>

        <List sx={{ width: '100%'}} subheader={<ListSubheader>Lista de Categorías</ListSubheader>} >

          {categorias?.map(c => (
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