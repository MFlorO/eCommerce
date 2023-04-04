import { heightFooter } from "../layout/EcommerceLayout"
import visa from "/img/visa.png"
import americanExpress from "/img/americanExpress.png"
import masterCard from "/img/masterCard.png"
import mercadoPago from "/img/mercadoPago.png"


import { Grid, Icon, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


const stylePagos = {
  width: '40px',
  height: '45px'
}



const Footer = () => {
  return (
    <Grid container paddingTop='2rem' justifyContent='center' mt='5rem' alignSelf='end' gap={5} sx={{backgroundColor:'#DBDBDB', height:`${heightFooter}rem`}}>
      <Grid item xs={2}>
        <Typography variant='h2'>NAVEGACION</Typography>
        <Grid mt='5px'>
          <Grid><Typography variant="h4" >TIENDA</Typography></Grid>
          <Grid><Typography variant="h4" >TALLES</Typography></Grid>
          <Grid><Typography variant="h4" >CÓMO COMPRAR</Typography></Grid>
          <Grid><Typography variant="h4" >DEVOLUCIONES</Typography></Grid>
        </Grid>
      </Grid>

      <Grid item xs={2}>
        <Typography variant='h2'>MEDIOS DE PAGO</Typography>
        <Grid mt='5px'>
              {/* todas las tarjetas que se acepten */}
          <img src={visa} alt={visa} style={stylePagos}/>
          <img src={americanExpress} alt={americanExpress} style={stylePagos}/>
          <img src={masterCard} alt={masterCard} style={stylePagos}/>
          <img src={mercadoPago} alt={mercadoPago} style={stylePagos}/>
        </Grid>
      </Grid>

      <Grid item  xs={2}>
        <Typography variant='h2'>FORMAS DE ENVIO</Typography>
        <Grid mt='5px'>
              {/* todas las tarjetas que se acepten */}
              <img src={visa} alt={visa} style={stylePagos}/>
        </Grid>
      </Grid>

      <Grid item xs={2}>
        <Typography variant='h2'>CONTACTO</Typography>
        <Grid container direction='column' mt='5px'>
          <Icon><InstagramIcon /></Icon>
          <Icon><WhatsAppIcon /></Icon>
          <Icon><EmailIcon /></Icon>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Footer