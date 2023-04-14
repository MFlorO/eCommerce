import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AdminLayOut } from "~/Admin/layout"
import { useForm } from "../../../Hook";

import { Container, Paper, Button, Input, TextField, Typography, Stack, Alert } from "@mui/material";
import { PostProducto } from "~/redux/slice/admin/thunks";
import { validacionFormularioProducto } from "~/functions/validacionFormulario";


let formData = {
  codigo: '',
  nombre: '',
  precio: 0,
  descripcion: '',
  imagen: '',
  fechaPublicacion: '',
  oferta: null
}





const CrearProducto = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { codigo, nombre , precio, descripcion, imagen, fechaPublicacion, oferta, 
    onInputChange, errorFormValid, onResetForm, formValid } = useForm(formData, validacionFormularioProducto)
  

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(PostProducto({ codigo, nombre , precio, descripcion, imagen, fechaPublicacion, oferta }));
    onResetForm();
    navigate(`/dashboard/admin/productos/crearModelo/${codigo}`) 
  }

  return (
    <AdminLayOut>
    <Container maxWidth="md">
  
      <Stack>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column"}}>

        <Typography variant='h4' textAlign='center' mb='1rem'>CREAR PRODUCTO</Typography>
       
        
        <form style={{ p: 2, display: "flex", flexDirection: "column", justifyContent:'center',  gap:'1rem'}} onSubmit={onSubmit}>

          <TextField label="Codigo" name="codigo" value={codigo} onChange={onInputChange} error={formValid()} helperText={errorFormValid.codigo} />

          
          <TextField label="Nombre" name="nombre" value={nombre} onChange={onInputChange} error={formValid()} helperText={errorFormValid.nombre} />

          <TextField multiline  rows={4}
            label="Descripción" name="descripcion" value={descripcion} onChange={onInputChange} error={formValid()} />
          
          <TextField type='number' label="Precio" name="precio" value={precio} onChange={onInputChange} error={formValid()} />

          <Input type='file' label="Imagen" name="imagen" value={imagen} onChange={onInputChange} />
          
          <TextField type='date' name="fechaPublicacion" value={fechaPublicacion} onChange={onInputChange} error={formValid()} />
          

        {Object.values(errorFormValid).length && <Alert severity="error">Error en el formulario, compruebe que todos los campos esten llenos</Alert>}
        <Button variant="contained" type="submit" disabled={formValid() || (codigo.length === 0) ? true : false}>SIGUIENTE</Button>
        </form>

        </Paper>
      </Stack>
      </Container>
    </AdminLayOut>
  )
}

export default CrearProducto;