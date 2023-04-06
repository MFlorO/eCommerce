import ItemLandingPage from "./ItemLandingPage";

import { Grid } from "@mui/material"
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const LandingPageFooter = ({margin}) => {
  
  return (
    <Grid container justifyContent={{xs:'center', sm:'space-between'}} alignItems='center' borderTop={margin === false && '2px solid #DBDBDB'} alignSelf='end' 
    pt={{xs:'20px', sm:'80px'}} gap={{xs:'40px 0px',sm:0}} 
    >
      <Grid item xs={12} sm={2}>
        <ItemLandingPage icono={<LoyaltyIcon />} titulo={'¡ARMA TU CONJUNTO!'} subtitulo={'Podes elegir y comprar piezas por separado y armar el conjunto ideal para vos!'}/>
      </Grid>
      <Grid item xs={12} sm={2}>
        <ItemLandingPage icono={<CreditCardIcon />} titulo={'Hasta 3 cuotas sin interés'} />
      </Grid>
      <Grid item xs={12} sm={2}>
        <ItemLandingPage icono={<AttachMoneyIcon />} titulo={'10% DE DESCUENTO'} subtitulo={'Transferencia/Efectivo'} />
      </Grid>
      <Grid item xs={12} sm={2}>
        <ItemLandingPage icono={<LocalShippingIcon />} titulo={'ENVIOS A TODO EL PAIS'} subtitulo={'Enviamos tu pedido a domicilio'} />
      </Grid>
    </Grid>
  )
}

export default LandingPageFooter


