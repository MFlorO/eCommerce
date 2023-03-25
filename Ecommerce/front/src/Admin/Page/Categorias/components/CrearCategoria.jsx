import { AdminLayOut } from "~/Admin/layout"
import { Grid, Paper, FormControl, TextField, Typography, Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import InputAdornment from '@mui/material/InputAdornment';




const CrearCategoria = () => {

  return (
    <AdminLayOut>
      <Grid container sx={{height:'70vh',alignItems:'center', justifyContent: 'center'}}>
  
      <Grid item xs={6}>
        <Paper sx={{ p: 2, display: "flex", justifyContent:'center', alignItems:'center'}}>
       
        <FormControl variant="standard" sx={{ gap:'1.5rem'}}>

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
            // value={email} 
            // onChange={onInputChange} 
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