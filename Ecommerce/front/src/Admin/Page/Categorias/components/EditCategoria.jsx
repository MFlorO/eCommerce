import { useDispatch } from 'react-redux';
import { UpdateCategorias } from '~/redux/slice/admin/thunks';
import CategoriaLayOut from "../../../layout/CategoriaLayOut";
import { validacionFormularioCategoria } from "~/functions/validacionFormulario";
import { useForm } from "~/Hook";


import { Box, TextField, Modal, Stack } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
const formData = {
  nombre: ""
}
  

const EditCategoria = ({modal, setModal, id}) => {

  const { nombre, onInputChange, errorFormValid, onResetForm, formValid } = useForm(formData, validacionFormularioCategoria)
  
  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(UpdateCategorias({id,nombre}))
    onResetForm();
    setModal(false) 
  }

  const botonDisabled = formValid() || (nombre.length === 0) ? true : false

  return (
    <Modal open={modal} onClose={() => setModal(false)} >
    <Box sx={style} width={{xs:300 , sm: 400}}>
      <CategoriaLayOut titulo='MODIFICAR CATEGORIA' boton='MODIFICAR' onSubmit={onSubmit} botonDisabled={botonDisabled} >
         <TextField
            label="Nombre"
            name="nombre" 
            value={nombre} 
            onChange={onInputChange} 
            error={formValid()}
            helperText={errorFormValid.nombre}
          />
      </CategoriaLayOut>
    </Box>
    </Modal>
  );
}

export default EditCategoria
