import { AdminLayOut } from "~/Admin/layout"
import { Grid, Paper, FormControl, Input, TextField } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import InputAdornment from '@mui/material/InputAdornment';




const CrearProducto = () => {

  return (
    <AdminLayOut>
      <Grid container justifyContent='center'>
  
      <Grid item xs={6} >
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
       
        <FormControl variant="standard"  sx={{ p: 2, display: "flex", flexDirection: "column", justifyContent:'center',  gap:'1rem'}}>

          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon />
                </InputAdornment>
              )}}

            label="Codigo"
            name="codigo" 
            // value={email} 
            // onChange={onInputChange} 
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
            // value={email} 
            // onChange={onInputChange} 
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
            // value={email} 
            // onChange={onInputChange} 
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
            // value={email} 
            // onChange={onInputChange} 
          />

          
          <Input
            type='file'
            label="Imagen"
            name="imagen" 
            // value={email} 
            // onChange={onInputChange} 
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
            // value={email} 
            // onChange={onInputChange} 
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
            // value={email} 
            // onChange={onInputChange} 
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
            name="categoria" 
            // value={email} 
            // onChange={onInputChange} 
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
            name="color" 
            // value={email} 
            // onChange={onInputChange} 
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
            name="talle" 
            // value={email} 
            // onChange={onInputChange} 
          />

          
        </FormControl>

        </Paper>
      </Grid>
  
      </Grid>
    </AdminLayOut>
  )
}

export default CrearProducto;