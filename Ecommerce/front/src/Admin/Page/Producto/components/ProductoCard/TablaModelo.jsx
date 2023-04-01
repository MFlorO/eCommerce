import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteModelo } from "~/redux/slice/admin/thunks";

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton} from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';


const titulo = ["Color", "Talle", "Stock"]



const TablaModelo = ({ modelos, codigo }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const deleteIdModelo = (id) =>  dispatch(DeleteModelo({id}))


  return (
    <TableContainer sx={{ width: 'max-content' , justifyContent:'center', border: "1px solid" }}>
    <Table>
    <TableHead sx={{width:'min-content'}}>
    <TableRow>
    {titulo.map ( t => <TableCell align="center" key={t}>{t}</TableCell>)} 
    <TableCell align='right'><IconButton onClick={() => navigate(`/dashboard/admin/productos/crearModelo/${codigo}`)}><AddIcon/></IconButton></TableCell>
    </TableRow>
    </TableHead>

    <TableBody>
      {modelos?.map(m => 
      <TableRow key={m.id}>
      <TableCell>{m.color}</TableCell>
      {m.modeloVariantes.map( mv => (
      <Fragment key={mv.id}>                             
        <TableCell>{mv.talle}</TableCell> 
        <TableCell>{mv.stock}</TableCell> 
        <TableCell>
          <Button onClick={ () => navigate(`/dashboard/admin/productos/modificarModelo/${m.id}/${mv.id}?color=${m.color}&talle=${mv.talle}&stock=${mv.stock}`)}><EditIcon fontSize='small'/></Button>
          <Button onClick={ () => deleteIdModelo(m.id)}><DeleteIcon fontSize='small'/></Button>
        </TableCell>
      </Fragment>
      ))}
      </TableRow>
    )}
    </TableBody>
    </Table>
    </TableContainer>
  )
}

export default TablaModelo