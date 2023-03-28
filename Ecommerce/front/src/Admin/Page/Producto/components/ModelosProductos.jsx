import { useNavigate } from "react-router-dom";
import { useForm } from "~/Hook";
import { validacionFormulario } from "~/functions";
import AdminLayOut from "../../../layout/AdminLayOut";

import { IconButton, Select, TextField, MenuItem, Stack, Typography, Button , Grid, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


const talles = ["xxl", "xl", "l", "m", "s", "xs"];
const colores = ["AZUL", "AMARILLO", "BLANCO", "BORDO", "ROSA", "VERDE"];

const formData = {
  modelo: "",
  talle: "",
  stock: 0
}



const ModelosProductos = () => {

  const { modelo, talle, stock, onInputChange, errorFormValid, onResetForm, formState } = useForm(formData, validacionFormulario)

  const navigate = useNavigate()
    
  // const formValid = () => {
  //   if (Object.keys(errorFormValid).length > 0) return true
  //   return false
  // }
  
  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(startLoginWithEmailPassword({ codigo, nombre , precio, descripcion, imagen, fecha, puntaje, idCategoria, idColor, idTalle }));
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
        <Select name="modelo" value={modelo ? modelo : ""} onChange={onInputChange}> {colores.map((c) => <MenuItem value={c} key={c}>{c}</MenuItem>)} </Select>
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

      <Typography component='h6' variant="p" mt='1rem'>Modelos creados</Typography>

        LISTA DE LOS MODELOS CREADOS

      <Button variant="contained" onClick={() => navigate(`/dashboard/admin/productos`)}>FINALIZAR</Button>

     </Stack>      
     </Paper>
     </Grid>
    </AdminLayOut>
 
  ) 
}

export default ModelosProductos;


