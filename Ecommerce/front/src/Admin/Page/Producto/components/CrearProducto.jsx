// import { useDispatch } from "react-redux";
import { AdminLayOut } from "~/Admin/layout"
import { useForm } from "~/Hook";
import { validacionFormulario } from "~/functions";
import CrearModelosProductos from "./CrearModelosProductos";
import { useCategoria } from "~/Hook";

import { Grid, Paper, Button, Input, TextField, Typography, Select, MenuItem, Menu } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle"
// import CancelRoundedIcon from "@mui/icons-material/CancelRounded"




const formData = {
  codigo: '',
  nombre: '',
  precio: 0,
  descripcion: '',
  imagen: '',
  fecha: '',
  puntaje: 0,
  idCategoria: []
}



const CrearProducto = () => {

  // const dispatch = useDispatch()

  const { codigo, nombre , precio, descripcion, imagen, fecha, puntaje, idCategoria, idColor, idTalle, idStock,
  onInputChange, errorFormValid, onResetForm } = useForm(formData, validacionFormulario)
  

  const categorias = useCategoria()
  
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
            type='date'
            name="fecha" 
            value={fecha} 
            onChange={onInputChange} 
          />

          
          <TextField
            type='number'
            label="Puntaje"
            name="puntaje" 
            value={puntaje} 
            onChange={onInputChange} 
          />

          <Select
            label="Categoría"
            name="idCategoria" 
            value={idCategoria}
            onChange={onInputChange} 
          >
            <MenuItem defaultValue={'none'}></MenuItem>
            {categorias?.payload?.map( c => <MenuItem value={c.id} key={c.id}>{c.nombre}</MenuItem>)}
          </Select>

          <Typography>Categorias Elegidas:</Typography>
          <ul>
            {idCategoria?.map( c => <li key={c}>{c}</li>)}
          </ul>
          
          {/* <CrearModelosProductos idColor={idColor} idTalle={idTalle} idStock={idStock} onInputChange={onInputChange}/> */}

          
        <Button variant="contained" type="submit" disabled={formValid()}>CREAR</Button>

          
        </form>

        </Paper>
      </Grid>
  
      </Grid>
    </AdminLayOut>
  )
}

export default CrearProducto;