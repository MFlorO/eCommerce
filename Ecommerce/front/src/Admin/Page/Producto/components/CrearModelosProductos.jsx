import { useState } from "react";

import { IconButton, Stack, Typography, Select, MenuItem } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



const CrearModelosProductos = ({idColor, idTalle, idStock, onInputChange}) => {

  const [expandir, setExpandir] = useState(false)


  return (
    <>
    <Stack flexDirection='row' alignItems='center'>
        <Typography>ELEGIR LOS MODELOS</Typography>
        <IconButton onClick={() => setExpandir(!expandir) }><AddIcon fontSize="small"/></IconButton>
    </Stack>

    <Stack flexDirection='row' justifyContent='space-around'>
       <Select  
            // label="Color"
            // name="idColor" 
            // onChange={onInputChange} 
            fullWidth
        >
          {/* {categorias.payload?.map( c => <MenuItem value={c.id} key={c.id}>{c.nombre}</MenuItem>)} */}
        </Select>

        <Select
            // label="Talle"
            // name="idTalle" 
            // onChange={onInputChange} 
            fullWidth
        >
          
        </Select>

        <Select
            // type='number'
            // label="Stock"
            // name="idStock" 
            // onChange={onInputChange} 
            fullWidth
        >

        </Select>

       <IconButton onClick={() => setExpandir(!expandir) }><RemoveIcon fontSize="small"/></IconButton>

    </Stack>

         { expandir && 
         <CrearModelosProductos />
         }
    </>
  ) 
}

export default CrearModelosProductos