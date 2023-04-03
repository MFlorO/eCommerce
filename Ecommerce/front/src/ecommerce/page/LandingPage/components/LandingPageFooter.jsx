import ItemLanding from "./ItemLanding.jsx"

import { Stack } from "@mui/material"

import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';



const LandingPageFooter = () => {
  
  return (
    <Stack flexDirection="row" marginTop='5rem' justifyContent='space-between' borderTop={'2px solid #DBDBDB'} paddingTop={'3.5rem'} alignSelf='end' sx={{ width: "100%" }}>
      <ItemLanding icono={<LoyaltyIcon />} titulo={'¡ARMA TU CONJUNTO!'} subtitulo={'Podes elegir y comprar piezas por separado y armar el conjunto ideal para vos!'}/>
      <ItemLanding icono={<CreditCardIcon />} titulo={'Hasta 3 cuotas sin interés'} />
      <ItemLanding icono={<LocalShippingIcon />} titulo={'ENVIOS A TODO EL PAIS'} subtitulo={'Enviamos tu pedido a domicilio'} />
    </Stack>
  )
}

export default LandingPageFooter


