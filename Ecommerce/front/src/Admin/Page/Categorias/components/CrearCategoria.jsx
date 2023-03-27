import { AdminLayOut } from "~/Admin/layout"
import { Grid, Paper, TextField } from "@mui/material";
import { useForm } from "~/Hook";
import { validacionFormulario } from "~/functions";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoriaLayOut from "../../../layout/CategoriaLayOut";




const formData = {
  nombre: ''
}



const CrearCategoria = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { nombre, onInputChange, errorFormValid, onResetForm } = useForm(formData, validacionFormulario)
  

  const formValid = () => {
    if (Object.keys(errorFormValid).length > 0) return true

    return false
  }


  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(startLoginWithEmailPassword(nombre.toUpperCase()));
    onResetForm();
    navigate(`/dashboard/admin/categorias`)
  }


  return (
    <AdminLayOut>
      <Grid container sx={{height:'70vh',alignItems:'center', justifyContent: 'center'}}>
  
      <Grid item xs={6}>
        <Paper sx={{ p: 2, display: "flex", justifyContent:'center', alignItems:'center'}}>

        <CategoriaLayOut titulo='CREAR UNA CATEGORIA' boton='CREAR' onSubmit={onSubmit}>
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
        </CategoriaLayOut>

        </Paper>
      </Grid>
  
      </Grid>
    </AdminLayOut>
  )
}

export default CrearCategoria;