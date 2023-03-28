import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AdminLayOut } from "~/Admin/layout"
import { useForm, useCategoria } from "~/Hook";
import { validacionFormulario } from "~/functions";

import { Grid, Paper, Button, Input, TextField, Typography, Select, MenuItem, IconButton, Stack } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


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

  const dispatch = useDispatch()

  const navigate = useNavigate()



  const { codigo, nombre , precio, descripcion, imagen, fecha, puntaje, idCategoria,
  onInputChange, errorFormValid, onResetForm } = useForm(formData, validacionFormulario)
  

  const categorias = useCategoria()

  const listaCategorias = idCategoria?.map((c, index) => {

    let nombre = categorias.payload?.map(categoria => categoria.id === c ? categoria.nombre : null) 

    return ( 
    <Stack flexDirection='row' alignItems='center' ml={2} key={index}>
       <li className="lista">{nombre}</li>
       <IconButton><DeleteForeverIcon fontSize="small"/></IconButton>
    </Stack>
   )
  })

  
  const formValid = () => {
    if (Object.keys(errorFormValid).length > 0) return true
    return false
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(startLoginWithEmailPassword({ codigo, nombre , precio, descripcion, imagen, fecha, puntaje, idCategoria, idColor, idTalle }));
    onResetForm();
    navigate(`/dashboard/admin/productos/crearModelo/${codigo}`) 
  }

  return (
    <AdminLayOut>
      <Grid container justifyContent='center'>
  
      <Grid item xs={6} >
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column"}}>

        <Typography variant='h5' textAlign='center' mb='1rem'>CREAR PRODUCTO</Typography>
       
        
        <form style={{ p: 2, display: "flex", flexDirection: "column", justifyContent:'center',  gap:'1rem'}} onSubmit={onSubmit}>

          <TextField label="Codigo" name="codigo" value={codigo} onChange={onInputChange} error={formValid()} helperText={errorFormValid.codigo} />

          
          <TextField label="Nombre" name="nombre" value={nombre} onChange={onInputChange} error={formValid()} helperText={errorFormValid.nombre} />

          <TextField multiline  rows={4}
            label="Descripción" name="descripcion" value={descripcion} onChange={onInputChange} error={formValid()} helperText={errorFormValid.descripcion}
          />
          
          <TextField type='number' label="Precio" name="precio" value={precio} onChange={onInputChange} />

          <Input type='file' label="Imagen" name="imagen" value={imagen} onChange={onInputChange} />
          
          <TextField type='date' name="fecha" value={fecha} onChange={onInputChange} />

          <TextField type='number' label="Puntaje" name="puntaje" value={puntaje} onChange={onInputChange} />

          
          <Typography>Categorías</Typography>
          <Select
            name="idCategoria" 
            value={idCategoria.length > 0 ? idCategoria : ""}
            onChange={onInputChange} 
          >
            {categorias?.payload?.map( c => <MenuItem value={c.id} key={c.id}>{c.nombre}</MenuItem>)}
          </Select>

          {/* LISTA DE CATEGORIAS */}
          <ul>
            {listaCategorias}
          </ul>
                    
        <Button variant="contained" type="submit" disabled={formValid()}>SIGUIENTE</Button>
        </form>

        </Paper>
      </Grid>
      </Grid>
    </AdminLayOut>
  )
}

export default CrearProducto;