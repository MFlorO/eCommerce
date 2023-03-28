import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductoID } from "~/redux/slice/admin/thunks";
import { useForm } from "~/Hook";
import { validacionFormulario } from "~/functions";
import AdminLayOut from "../../../layout/AdminLayOut";
import { PostModeloProductoId, DeleteModelo } from "~/redux/slice/admin/thunks";

import { IconButton, Select, TextField, MenuItem, Stack, Typography, Button , Grid, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from "@mui/icons-material/Delete";


const talles = ["xxl", "xl", "l", "m", "s", "xs"];
const colores = ["AZUL", "AMARILLO", "BLANCO", "BORDO", "ROSA", "VERDE"];

const formData = {
  color: "",
  talle: "",
  stock: 0
}



const ModelosProductos = () => {

  const { color, talle, stock, onInputChange, errorFormValid, onResetForm, formState } = useForm(formData, validacionFormulario)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { producto } = useSelector( state => state.admin)
  const {id} = useParams()

  
  useEffect(() => {
    dispatch(getProductoID(id))
  }, [])
  

  const deleteIdModelo = (id) => {
    dispatch(DeleteModelo({id}))
  }
    
  // const formValid = () => {
  //   if (Object.keys(errorFormValid).length > 0) return true
  //   return false
  // }


  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(PostModeloProductoId({ color, talle, stock},{id}));
    onResetForm();
  }


  return (

  <AdminLayOut>
    <Grid container sx={{width:'90%', display:'flex', justifyContent:'center'}}>
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column", minHeight:'20rem' }}>

    <Stack gap={2}>
      <Typography component="h6" variant="h6" textAlign='center'>ELEGIR LOS MODELOS</Typography>

      <form onSubmit={onSubmit}>
      <Stack flexDirection='row' gap={1} sx={{width:'100%'}}>
      <Stack width={"100%"}>
        <Typography component='h6' variant="p">Color</Typography>
        <Select name="color" value={color ? color : ""} onChange={onInputChange}> {colores.map((c) => <MenuItem value={c} key={c}>{c}</MenuItem>)} </Select>
      </Stack>

      <Stack width={"100%"}>
        <Typography component='h6' variant="p">Talle</Typography>
        <Select name="talle" value={talle ? talle : ""} onChange={onInputChange} > {talles.map((t) => <MenuItem value={t} key={t}>{t}</MenuItem>)} </Select>
      </Stack>

      <Stack width={"100%"}>
        <Typography component='h6' variant="p">Stock</Typography>
        <TextField type="number" name="stock" value={stock} onChange={onInputChange} />
      </Stack>     
      <IconButton type='submit' variant='contained'><AddIcon /></IconButton>
      </Stack>
      </form>

      {producto.payload?.modelos &&
      <>
        <Typography component='h6' variant="p" mt='1rem'>Modelos creados</Typography>

        <ul>
          {producto.payload.modelos?.map( m => (
            <Stack flexDirection='row' alignItems='center' gap={3} key={m.id}>
              <Typography>{m.color}</Typography>
              <Typography>{m.modeloVariantes[0].talle}</Typography>
              <Typography>{m.modeloVariantes[0].stock}</Typography>
              <IconButton onClick={ () => deleteIdModelo(m.id)}><DeleteIcon /></IconButton>
            </Stack>
          ))}
        </ul>
      </>
     }
      <Button variant="contained" onClick={() => navigate(`/dashboard/admin/productos`)}>FINALIZAR</Button>

     </Stack>      
     </Paper>
     </Grid>
    </AdminLayOut>
 
  ) 
}

export default ModelosProductos;


