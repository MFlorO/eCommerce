import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm, useCategorias } from "../../../Hook";
import { PostCategoriaProductoId } from "~/redux/slice/admin/thunks";
import AdminLayOut from "../../../layout/AdminLayOut";
import { validacionFormularioProducto } from "~/functions/validacionFormulario";

import { Button, IconButton, Select, MenuItem, Stack, Typography , Grid, Paper} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


let formData = {
  idCategoria: []
}



const AgregarCategoria = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const categorias = useCategorias()
  const { codigo } = useParams() 

  
  const { idCategoria, onInputChange, onResetForm, formValid } = useForm(formData, validacionFormularioProducto)
  

  const listaCategorias = idCategoria?.map((c, index) => {

    let nombre = categorias?.map(categoria => categoria.id === c ? categoria.nombre : null)


    const deleteCategoriasSeleccionadas = (c) =>{
      // let idCategoriaFinal = idCategoria?.filter(categoria => categoria.id !== c ) 

      // setFormState({ ...formState, idCategoria: c  })
    }

    return ( 
    <Stack flexDirection='row' alignItems='center' ml={2} key={index}>
       <li>{nombre}</li>
       <IconButton onClick={() => deleteCategoriasSeleccionadas()}><DeleteForeverIcon fontSize="small"/></IconButton>
    </Stack>
   )
  })


  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(PostCategoriaProductoId({ id:idCategoria },{codigo}));
    onResetForm();
    navigate(`/dashboard/admin/productos`) 
  }

  return (
    <AdminLayOut>
    <Grid container sx={{width:'100%', display:'flex', justifyContent:'center', alignContent:'items'}} ml={{xs:'1px', sm:'0px'}} >
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column", minHeight:'20rem' }}>
  

    <form onSubmit={onSubmit}>
      <Stack gap={2}>
      <Typography component="h6" variant="h6" textAlign='center'>AGREGAR CATEGORÍAS</Typography>
      <Select
        fullWidth
        name="idCategoria"
        value={idCategoria.length > 0 ? idCategoria : ""}
        onChange={onInputChange}
        error={formValid()}
      >
        {categorias?.map((c) => <MenuItem value={c.id} key={c.id}>{c.nombre}</MenuItem>)}
      </Select>

      {/* LISTA DE CATEGORIAS */}
      <ul>{listaCategorias}</ul>
      <Button variant="contained" fullWidth type="submit">FINALIZAR</Button>
      </Stack>
    </form>
     
     </Paper>
     </Grid>
    </AdminLayOut>
  );
};


export default AgregarCategoria