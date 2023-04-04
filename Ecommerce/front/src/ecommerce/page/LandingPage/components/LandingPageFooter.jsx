import ItemLandingPage from "./ItemLandingPage";

import { Stack, Grid } from "@mui/material"
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';



const LandingPageFooter = () => {
  
  return (
    <Grid container justifyContent={{xs:'center', sm:'space-between'}} alignItems='center' borderTop='2px solid #DBDBDB' alignSelf='end' 
    paddingTop={{xs:'20px', sm:'80px'}} gap={{xs:5,sm:0}}
    >
      <Grid item xs={12} sm={3}>
        <ItemLandingPage icono={<LoyaltyIcon />} titulo={'¡ARMA TU CONJUNTO!'} subtitulo={'Podes elegir y comprar piezas por separado y armar el conjunto ideal para vos!'}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ItemLandingPage icono={<CreditCardIcon />} titulo={'Hasta 3 cuotas sin interés'} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <ItemLandingPage icono={<LocalShippingIcon />} titulo={'ENVIOS A TODO EL PAIS'} subtitulo={'Enviamos tu pedido a domicilio'} />
      </Grid>
    </Grid>
  )
}

export default LandingPageFooter


