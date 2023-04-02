import TablaCategorias from "./TablaCategorias";
import TablaModelo from "./TablaModelo";
import TablaPrincipal from "./TablaPrincipal";
import { ListItemText, Accordion, AccordionSummary, AccordionDetails, IconButton, Grid } from "@mui/material/";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const ListaProductos = (p) => {

  return (
    <Accordion sx={{ boxShadow: "none", height: "max-content", gap: 2 }} >
      <AccordionSummary>
        <ListItemText primary={p.nombre} />
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </AccordionSummary>

      <AccordionDetails>
          <Grid container spacing={2} boxShadow={'rgba(107, 107, 107, 0.5) 2px 2px 6px 2px inset'}>
            <Grid item xs={12} sm={12} >
              <TablaPrincipal p={p} />
            </Grid>

            <Grid item xs={12} sm={4} >
              <TablaCategorias categoria={p.categoria} codigo={p.codigo} />
            </Grid>

            <Grid item xs={12} sm={4} >
              <TablaModelo modelos={p.modelos} codigo={p.codigo}/>
            </Grid>
          </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ListaProductos;
