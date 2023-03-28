import TablaProducto from "./TablaProducto";
import { ListItemText, Accordion, AccordionSummary, AccordionDetails, Stack, IconButton } from "@mui/material/";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ListaProductos = (p) => {

  return (
    <Accordion sx={{ width: "100%", boxShadow: "none", height:'max-content', minHeight:'max-content', gap:2}}>
      <AccordionSummary >
        <ListItemText primary={p.nombre} />
        <IconButton><KeyboardArrowDownIcon /></IconButton>
      </AccordionSummary>

      <AccordionDetails>
        <Stack flexDirection='row' alignItems='center' >
          <TablaProducto {...p} />  
        </Stack>
      </AccordionDetails>



    </Accordion>
  );
};

export default ListaProductos;
