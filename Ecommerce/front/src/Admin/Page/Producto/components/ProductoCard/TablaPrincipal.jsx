import MenuEditarYBorrar from './MenuEditarYBorrar';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';



const titulo = ["Código", "Nombre", "Descripción", "Precio", "Imagen", "Fecha de Publicación", "Oferta"]



const TablaPrincipal = ({p}) => {

  const {codigo, nombre, descripcion, precio, imagen, fechaPublicacion, oferta} = p
  const filas = {codigo, nombre, descripcion, precio, imagen, fechaPublicacion}

  return (
    <TableContainer sx={{border: "1px solid"}}>
    <Table>
    <TableHead>
      <TableRow>
      {titulo.map ( t => <TableCell align="center" key={t}>{t}</TableCell>)} 
      <TableCell align="center"><MenuEditarYBorrar {...p}/></TableCell>
    </TableRow>
    </TableHead>

    <TableBody>
    <TableRow>
      {Object.values(filas)?.map((row, index) => <TableCell align="center"  key={index} style={{ minWidth:'max-content' }} >{row}</TableCell> )}
      <TableCell>{oferta === null ? 'Null' : oferta}</TableCell>
    </TableRow>
    </TableBody>
    </Table>
    </TableContainer>
  )
}

export default TablaPrincipal