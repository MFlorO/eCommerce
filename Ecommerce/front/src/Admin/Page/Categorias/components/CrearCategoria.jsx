import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminLayOut } from "~/Admin/layout"
import CategoriaLayOut from "../../../layout/CategoriaLayOut";
import { PostCategorias } from "~/redux/slice/admin/thunks";
import { useForm } from "~/Hook";
import { validacionFormulario } from "~/functions";

import { Grid, Paper, TextField } from "@mui/material";




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
    dispatch(PostCategorias({nombre}));
    // onResetForm();
    navigate(`/dashboard/admin/categorias`)
  }


  return (
    <AdminLayOut>
      <Grid container sx={{height:'70vh',alignItems:'center', justifyContent: 'center'}}>
  
      <Grid item xs={6}>
        <Paper sx={{ p: 2, display: "flex", justifyContent:'center', alignItems:'center'}}>

        <CategoriaLayOut titulo='CREAR UNA CATEGORIA' boton='CREAR' onSubmit={onSubmit}>
         <TextField
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