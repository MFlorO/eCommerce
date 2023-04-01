import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateModelo, DeleteModelo } from "~/redux/slice/admin/thunks";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const titulo = ["Color", "Talle", "Stock"]



const TablaModelo = ({modelos}) => {

  const dispatch = useDispatch()
  const deleteIdModelo = (id) =>  dispatch(DeleteModelo({id}))
  // const editModelo = () => dispatch(updateModelo)

  return (
    <TableContainer sx={{ width: 'max-content' , justifyContent:'center', border: "1px solid" }}>
    <Table>
    <TableHead sx={{width:'min-content'}}>
    <TableRow>
    {titulo.map ( t => <TableCell align="center" key={t}>{t}</TableCell>)} 
    <TableCell></TableCell>
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
              <Button><EditIcon  fontSize='small'/></Button>
              <Button onClick={ () => deleteIdModelo(m.id)}><DeleteIcon fontSize='small'/></Button></TableCell>
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