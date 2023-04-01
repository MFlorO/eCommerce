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
          <Grid container spacing={2} sx={{ width: "100%" }} >
            <Grid item xs={12}>
              <TablaPrincipal p={p} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TablaCategorias categoria={p.categoria} codigo={p.codigo} />
            </Grid>

            <Grid sx={{ width: "100%", overflow: "hidden" }} item xs={12} sm={4}>
              <TablaModelo modelos={p.modelos} codigo={p.codigo}/>
            </Grid>
          </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ListaProductos;
