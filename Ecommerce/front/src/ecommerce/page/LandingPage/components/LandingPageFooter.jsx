import ItemLandingPage from "./ItemLandingPage";

import { Grid } from "@mui/material"
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const LandingPageFooter = ({margin}) => {
3
  return (
    <Grid container justifyContent={{xs:'center', sm:'space-between'}} alignItems='center' borderTop={margin === false && '2px solid #DBDBDB'}
    pt={{xs:'30px', sm:'80px'}} gap={{xs:'40px 0px',sm:'4px 0px'}}
    >
      <Grid item xs={10} sm={3}>
        <ItemLandingPage icono={<LoyaltyIcon />} titulo={'¡ARMA TU CONJUNTO!'} subtitulo={'Podes elegir y comprar piezas por separado y armar el conjunto ideal para vos!'}/>
      </Grid>
      <Grid item xs={10} sm={3}>
        <ItemLandingPage icono={<CreditCardIcon />} titulo={'Hasta 3 cuotas sin interés'} />
      </Grid>
      <Grid item xs={10} sm={3}>
        <ItemLandingPage icono={<AttachMoneyIcon />} titulo={'10% DE DESCUENTO'} subtitulo={'Transferencia/Efectivo'} />
      </Grid>
      <Grid item xs={10} sm={3}>
        <ItemLandingPage icono={<LocalShippingIcon />} titulo={'ENVIOS A TODO EL PAIS'} subtitulo={'Enviamos tu pedido a domicilio'} />
      </Grid>
    </Grid>
  )
}

export default LandingPageFooter


