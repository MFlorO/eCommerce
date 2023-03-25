import { AdminLayOut } from "~/Admin/layout"
import { Grid, Paper, FormControl, TextField, Typography, Button } from "@mui/material";
import { useForm } from "~/Hook";
import { validacionFormulario } from "~/functions";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import InputAdornment from '@mui/material/InputAdornment';




const formData = {
  nombre: ''
}




const CrearCategoria = () => {

  const { nombre, onInputChange, errorFormValid, onResetForm } = useForm(formData, validacionFormulario)
  

  const formValid = () => {
    if (Object.keys(errorFormValid).length > 0) return true

    return false
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({nombre}));
    onResetForm();
  }


  return (
    <AdminLayOut>
      <Grid container sx={{height:'70vh',alignItems:'center', justifyContent: 'center'}}>
  
      <Grid item xs={6}>
        <Paper sx={{ p: 2, display: "flex", justifyContent:'center', alignItems:'center'}}>
       
        <FormControl variant="standard" sx={{ gap:'1.5rem'}} onSubmit={onSubmit}>

          <Typography component="h5" variant="h6" textAlign='center'>CREAR UNA CATEGORIA</Typography>
          
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
            error={formValid()}
            helperText={errorFormValid.nombre}
          />

          <Button variant="contained">CREAR</Button>

          
        </FormControl>

        </Paper>
      </Grid>
  
      </Grid>
    </AdminLayOut>
  )
}

export default CrearCategoria;