import { AdminLayOut } from "~/Admin/layout"
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { useForm } from "~/Hook";
import { validacionFormulario } from "~/functions";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch } from "react-redux";




const formData = {
  nombre: ''
}



const CrearCategoria = () => {

  const dispatch = useDispatch()

  const { nombre, onInputChange, errorFormValid, onResetForm } = useForm(formData, validacionFormulario)
  

  const formValid = () => {
    if (Object.keys(errorFormValid).length > 0) return true

    return false
  }


  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(startLoginWithEmailPassword(nombre.toUpperCase()));
    onResetForm();
  }


  return (
    <AdminLayOut>
      <Grid container sx={{height:'70vh',alignItems:'center', justifyContent: 'center'}}>
  
      <Grid item xs={6}>
        <Paper sx={{ p: 2, display: "flex", justifyContent:'center', alignItems:'center'}}>
       
        <form style={{ display:'flex', flexDirection:'column', gap:'1.5rem'}} onSubmit={onSubmit}>

          <Typography component="h5" variant="h6" textAlign='center'>CREAR UNA CATEGORIA</Typography>
          
          <TextField
            InputProps={{ startAdornment: ( 
                <InputAdornment>
                  {!errorFormValid.nombre ? <CheckCircleIcon color="success"/> : <CancelRoundedIcon color="error"/>}
                </InputAdornment>
              )}}
            label="Nombre"
            name="nombre" 
            value={nombre} 
            onChange={onInputChange} 
            error={formValid()}
            helperText={errorFormValid.nombre}
          />

          <Button variant="contained" type="submit" disabled={formValid()}>CREAR</Button>

        </form>

        </Paper>
      </Grid>
  
      </Grid>
    </AdminLayOut>
  )
}

export default CrearCategoria;