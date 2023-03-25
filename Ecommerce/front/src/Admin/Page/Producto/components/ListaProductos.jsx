
import { ListItemText, Accordion, AccordionSummary, AccordionDetails } from "@mui/material/";
import TablaProducto from "./TablaProducto";


const ListaProductos = (p) => {

  return (
    <Accordion sx={{ width: "100%", boxShadow: "none" }}>
      <AccordionSummary >
        <ListItemText primary={p.nombre} />
      </AccordionSummary>

      <AccordionDetails>
        <TablaProducto {...p} />  
      </AccordionDetails>

    </Accordion>
  );
};

export default ListaProductos;
