import { AdminLayOut } from "~/Admin/layout"
import { validacionFormulario } from "~/functions";
import { useForm } from "~/Hook";

import { Grid, Paper, FormControl, Input, TextField } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import InputAdornment from '@mui/material/InputAdornment';



const CrearProducto = () => {

  const { codigo, nombre , precio, descripcion, imagen, fecha, puntaje, idCategoria, idColor, idTalle, 
  onInputChange, errorFormValid, onResetForm } = useForm(formData, validacionFormulario)


  const formValid = () => {
    if (Object.keys(errorFormValid).length > 0) return true

    return false
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({
     codigo, nombre , precio, descripcion, imagen, fecha, puntaje, idCategoria, idColor, idTalle 
    }));
    onResetForm();
  }

  return (
    <AdminLayOut>
      <Grid container justifyContent='center'>
  
      <Grid item xs={6} >
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
       
        <FormControl variant="standard"  sx={{ p: 2, display: "flex", flexDirection: "column", justifyContent:'center',  gap:'1rem'}} onSubmit={onSubmit}>

          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon />
                </InputAdornment>
              )}}

            label="Codigo"
            name="codigo" 
            value={codigo} 
            onChange={onInputChange} 
          />

          
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon />
                </InputAdornment>
              )}}
            label="Nombre"
            name="nombre" 
            value={nombre} 
            onChange={onInputChange} 
          />

          
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon />
                </InputAdornment>
              )}}
            multiline
            rows={4}
            label="Descripción"
            name="descripcion" 
            value={descripcion} 
            onChange={onInputChange} 
          />

          
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon />
                </InputAdornment>
              )}}
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
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon />
                </InputAdornment>
              )}}
            type='date'
            label="Fecha de publicación"
            name="fecha" 
            value={fecha} 
            onChange={onInputChange} 
          />

          
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon />
                </InputAdornment>
              )}}
            type='number'
            label="Puntaje"
            name="puntaje" 
            value={puntaje} 
            onChange={onInputChange} 
          />

          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon />
                </InputAdornment>
              )}}
            select
            label="Categoría"
            name="idCategoria" 
            value={idCategoria} 
            onChange={onInputChange} 
          />

          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon />
                </InputAdornment>
              )}}
            select
            label="Color"
            name="idColor" 
            value={idColor} 
            onChange={onInputChange} 
          />

          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon />
                </InputAdornment>
              )}}
            select
            label="Talle"
            name="idTalle" 
            value={idTalle} 
            onChange={onInputChange} 
          />

          
        </FormControl>

        </Paper>
      </Grid>
  
      </Grid>
    </AdminLayOut>
  )
}

export default CrearProducto;