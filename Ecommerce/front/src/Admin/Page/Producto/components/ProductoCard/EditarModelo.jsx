import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminLayOut from "../../../../layout/AdminLayOut";
import { useForm, useQueryParams } from "~/Hook";
import { validacionFormularioModelos } from "~/functions/validacionFormulario";
import { UpdateModeloID } from "~/redux/slice/admin/thunks";

import { Select, TextField, MenuItem, Stack, Typography, Button , Grid, Paper} from "@mui/material";


const talles = ["XXL", "XL", "L", "M", "S", "XS"];
const colores = ["AZUL", "AMARILLO", "BLANCO", "BORDO", "ROSA", "VERDE"];



const formData = {
  color: "",
  talle: "",
  stock: ""
}
  



const EditarModelo = () => {

  // const query = useQueryParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id, idMV } = useParams()


  let { color, talle, stock, onInputChange, onResetForm, formState, setFormState } = useForm(formData, validacionFormularioModelos)


  // useEffect(() => {

  //   setFormState({ ...formState, color: query?.color, talle: query?.talle, stock: query?.stock})
    
  // }, [ query ])
  


  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(UpdateModeloID({color, talle, stock},{id, idMV}));
    onResetForm();
    navigate(`/dashboard/admin/productos`)
  }


  return (

  <AdminLayOut>
    <Grid container sx={{width:'90%', display:'flex', justifyContent:'center', alignContent:'items'}} ml={{xs:'20px', sm:'0px'}} >
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column", minHeight:'20rem' }}>

    <Stack gap={2}>
      <Typography component="h6" variant="h6" textAlign='center'>MODIFICAR MODELO</Typography>

      <form onSubmit={onSubmit}>
      <Stack flexDirection='column' justifyContent='center' alignItems='center' gap={1} width={{xs:'19rem'}}>
      <Stack width={"100%"}>
        <Typography component='h6' variant="p">Color</Typography>
        <Select  name="color" value={color || ""} onChange={onInputChange}> {colores.map((c) => <MenuItem value={c} key={c}>{c}</MenuItem>)} </Select>
      </Stack>

      <Stack width={"100%"}>
        <Typography component='h6' variant="p">Talle</Typography>
        <Select name="talle" value={talle !== undefined ? talle : ""} onChange={onInputChange} > {talles.map((t) => <MenuItem value={t} key={t}>{t}</MenuItem>)} </Select>
      </Stack>

      <Stack width={"100%"}>
        <Typography component='h6' variant="p">Stock</Typography>
        <TextField type="number" name="stock" value={stock ? stock :  0} onChange={onInputChange} />
      </Stack>

      <Button variant="contained" type='submit'>MODIFICAR</Button>

      </Stack>

      </form>

     </Stack>      
     </Paper>
     </Grid>
    </AdminLayOut>
 
  ) 
}

export default EditarModelo;