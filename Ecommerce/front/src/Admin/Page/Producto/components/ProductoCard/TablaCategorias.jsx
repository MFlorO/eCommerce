import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

const TablaCategorias = ({categoria}) => {
  return (
    <TableContainer sx={{ width: 'max-content', justifyContent:'center', border:"1px solid"}}>
    <Table>
    <TableHead>
    <TableRow>
      <TableCell>Categorias</TableCell>
    </TableRow>
    </TableHead>

    <TableBody>
      {categoria?.map((c) =><TableRow key={c.id}><TableCell>{c.nombre}</TableCell></TableRow> ) }
    </TableBody>
    </Table>
    </TableContainer>
  )
}

export default TablaCategorias