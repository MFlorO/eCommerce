import { IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";




const TablaProducto = (p) => {
  return (
    <Stack flexDirection="row">
    <TableContainer>
    <Table>

        <TableHead>
         <TableRow>
            {Object.keys(p)?.map ( encabezado => <TableCell>{encabezado}</TableCell>)}
            <TableCell>EDITAR</TableCell>
            <TableCell>ELIMINAR</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
         <TableRow >
          {Object.values(p)?.map(row => <TableCell>{row}</TableCell> )}
             <TableCell><IconButton><EditIcon /></IconButton></TableCell>
             <TableCell><IconButton><DeleteIcon /></IconButton></TableCell>
         </TableRow>
        </TableBody>

    </Table>
    </TableContainer>
    </Stack>
  );
};

export default TablaProducto;





