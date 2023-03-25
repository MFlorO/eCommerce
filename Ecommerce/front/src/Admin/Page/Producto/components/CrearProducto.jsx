// import { useDispatch } from "react-redux";
import { AdminLayOut } from "~/Admin/layout"
import { useForm } from "~/Hook";
import { validacionFormulario } from "~/functions";

import { Grid, Paper, Button, Input, TextField } from "@mui/material";


const formData = {
  codigo: '',
  nombre: '',
  precio: 0,
  descripcion: '',
  imagen: '',
  fecha: '',
  puntaje: 0,
}



const CrearProducto = () => {

  // const dispatch = useDispatch()

  const { codigo, nombre , precio, descripcion, imagen, fecha, puntaje, idCategoria, idColor, idTalle, 
  onInputChange, errorFormValid, onResetForm } = useForm(formData, validacionFormulario)


  const formValid = () => {
    if (Object.keys(errorFormValid).length > 0) return true

    return false
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(startLoginWithEmailPassword({ codigo, nombre , precio, descripcion, imagen, fecha, puntaje, idCategoria, idColor, idTalle }));
    onResetForm();
  }

  return (
    <AdminLayOut>
      <Grid container justifyContent='center'>
  
      <Grid item xs={6} >
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
       
        <form style={{ p: 2, display: "flex", flexDirection: "column", justifyContent:'center',  gap:'1rem'}} onSubmit={onSubmit}>

          <TextField
            label="Codigo"
            name="codigo" 
            value={codigo} 
            onChange={onInputChange} 
            error={formValid()}
            helperText={errorFormValid.codigo}
          />

          
          <TextField
            label="Nombre"
            name="nombre" 
            value={nombre} 
            onChange={onInputChange} 
            error={formValid()}
            helperText={errorFormValid.nombre}
          />

          
          <TextField
            multiline
            rows={4}
            label="Descripción"
            name="descripcion" 
            value={descripcion} 
            onChange={onInputChange} 
            error={formValid()}
            helperText={errorFormValid.descripcion}
          />

          
          <TextField
            type='number'
            label="Precio"
            name="precio" 
            value={precio} 
            onChange={onInputChange} 
          />

          
          <Input
            type='file'
            label="Imagen"
            name="imagen" 
            value={imagen} 
            onChange={onInputChange} 
          />
          
          <TextField
            InputProps={{ startAdornment: ( 
              <InputAdornment>
                {!errorFormValid.nombre ? <CheckCircleIcon color="success"/> : <CancelRoundedIcon color="error"/>}
              </InputAdornment>
            )}}
            type='date'
            label="Fecha de publicación"
            name="fecha" 
            value={fecha} 
            onChange={onInputChange} 
          />

          
          <TextField
            InputProps={{ startAdornment: ( 
              <InputAdornment>
                {!errorFormValid.nombre ? <CheckCircleIcon color="success"/> : <CancelRoundedIcon color="error"/>}
              </InputAdornment>
            )}}
            type='number'
            label="Puntaje"
            name="puntaje" 
            value={puntaje} 
            onChange={onInputChange} 
          />

          <TextField
            select
            label="Categoría"
            name="idCategoria" 
            value={idCategoria} 
            onChange={onInputChange} 
          />

          <TextField
            select
            label="Color"
            name="idColor" 
            value={idColor} 
            onChange={onInputChange} 
          />

          <TextField
            select
            label="Talle"
            name="idTalle" 
            value={idTalle} 
            onChange={onInputChange} 
          />

        <Button variant="contained" type="submit" disabled={formValid()}>CREAR</Button>

          
        </form>

        </Paper>
      </Grid>
  
      </Grid>
    </AdminLayOut>
  )
}

export default CrearProducto;