import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useProducto } from '~/Hook';
import { UpdateCategoriaProductoId } from "~/redux/slice/admin/thunks";

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from "@mui/icons-material/Delete";





const TablaCategorias = ({ codigo, categoria }) => {


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const producto = useProducto(codigo)


  const deleteCategoria = async (id) =>  {

    const idCategoria = []

    await producto?.categoria.filter( c => {
      if(c.id === id) idCategoria.push(c.id)
      console.log('c', c)
      return 
    })

    console.log('submit', idCategoria)

    dispatch(UpdateCategoriaProductoId({id: idCategoria},{codigo}))
  }


  return (
    <TableContainer sx={{ width: 'max-content', justifyContent:'center', border:"1px solid"}}>
    <Table>
    <TableHead>
    <TableRow>
      <TableCell>Categorias</TableCell>
      <TableCell align='right'><IconButton onClick={() => navigate(`/dashboard/admin/productos/categorias/${codigo}`)}><AddIcon/></IconButton></TableCell>
    </TableRow>
    </TableHead>

    <TableBody>
      {categoria?.map((c) => (
      <TableRow key={c.id}>
        <TableCell>{c.nombre}</TableCell>
        <TableCell><Button onClick={ () => deleteCategoria(c.id)}><DeleteIcon fontSize='small'/></Button></TableCell>
      </TableRow> ) )
      }
    </TableBody>
    </Table>
    </TableContainer>
  )
}

export default TablaCategorias