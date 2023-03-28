import {Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material/";
import MenuEditarYBorrar from "./MenuEditarYBorrar";

const titulo = ["Código", "Descripción", "Precio", "Imagen", "Fecha de Publicación", "Puntaje", "Oferta"]




const TablaProducto = (p) => {

  const {codigo, nombre, descripcion, precio, imagen, fechaPublicacion, puntaje, oferta} = p

  const filas = {codigo, descripcion, precio, imagen, fechaPublicacion, puntaje, oferta}

  return (
    <TableContainer  sx={{ width: '100%', overflow: 'hidden', border:'1px solid'}}>
    <Table>

        <TableHead>
         <TableRow>
            {titulo.map ( t => <TableCell key={t}>{t}</TableCell>)}
            <TableCell align="center">Categoría</TableCell>    
            <TableCell align="center">Modelo</TableCell>     
            <TableCell align="center"><MenuEditarYBorrar /></TableCell>
          </TableRow>
        </TableHead>


        <TableBody>
         <TableRow>
          {Object.values(filas)?.map((row) => <TableCell key={row}>{row}</TableCell> )}
          {p.categoria?.map((c) => <Stack key={c.id} display='flex' flexDirection='column' alignItems='center'>
                                       <TableCell sx={{border:0}}>{c.nombre}</TableCell> 
                                   </Stack> ) 
          }

          <TableCell>  

            <Stack flexDirection='row' justifyContent='space-between' borderBottom='1px solid #E0E0E0' sx={{width:'7rem'}}>
              <Typography variant='p'>Color</Typography>
              <Typography variant='p'>Talle</Typography> 
              <Typography variant='p'>Stock</Typography>
            </Stack>

            {p.modelos?.map((m) => 
              <Stack flexDirection='row' justifyContent='space-between' borderBottom='1px solid #E0E0E0' sx={{width:'7rem'}} key={m.id}>
                 <Stack width={'50%'}><Typography>{m.color}</Typography></Stack>

                 <Stack width={'50%'}>
                  {m.modeloVariantes.map( mv => (
                    <Stack flexDirection='row' justifyContent='space-between' key={mv.id}>              
                      <Typography>{mv.talle}</Typography> 
                      <Typography>{mv.stock}</Typography> 
                      </Stack>
                  ))}
                  </Stack>

                </Stack>
              )}
            </TableCell>  

         </TableRow>
        </TableBody>

    </Table>
    </TableContainer>
  );
};

export default TablaProducto;





