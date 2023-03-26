import TablaProducto from "./TablaProducto";

import { ListItemText, Accordion, AccordionSummary, AccordionDetails, Button, Stack } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const ListaProductos = (p) => {

  return (
    <Accordion sx={{ width: "100%", boxShadow: "none", height:'max-content'}}>
      <AccordionSummary >
        <ListItemText primary={p.nombre} />
      </AccordionSummary>

      <AccordionDetails>
        <Stack flexDirection='row'>
          <TablaProducto {...p} />  
          <Button title='EDITAR PRODUCTO'><EditIcon /></Button>
          <Button title='ELIMINAR PRODUCTO'><DeleteIcon /></Button>
        </Stack>
      </AccordionDetails>



    </Accordion>
  );
};

export default ListaProductos;
