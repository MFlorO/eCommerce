import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import { Fragment } from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const titulo = ["Color", "Talle", "Stock"]


const TablaModelo = ({modelos}) => {
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
              <Button><DeleteIcon fontSize='small'/></Button></TableCell>
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