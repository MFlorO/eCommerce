import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { DeleteCategorias } from '~/redux/slice/admin/thunks';
import { useProducto, useQueryParams } from '~/Hook';

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';






const TablaCategorias = ({ codigo, categoria }) => {

  // const query = useQueryParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const producto = useProducto(codigo)

  console.log(producto)



  // const deleteCategoria = (id) =>  dispatch(DeleteCategorias({id}))

  return (
    <TableContainer sx={{ width: 'max-content', justifyContent:'center', border:"1px solid"}}>
    <Table>
    <TableHead>
    <TableRow>
      <TableCell colSpan={2}>Categorias</TableCell>
      <TableCell align='right'><IconButton onClick={() => navigate(`/dashboard/admin/productos/categoria/:codgio`)}><AddIcon/></IconButton></TableCell>
    </TableRow>
    </TableHead>

    <TableBody>
      {categoria?.map((c) => (
      <TableRow key={c.id}>
        <TableCell>{c.nombre}</TableCell>
        {/* <TableCell><Button onClick={ (id) => deleteCategoria(c.id)}><DeleteIcon fontSize='small'/></Button></TableCell> */}
      </TableRow> ) )
      }
    </TableBody>
    </Table>
    </TableContainer>
  )
}

export default TablaCategorias