import { heightFooter } from "../layout/EcommerceLayout"
import visa from "/img/visa.png"
import americanExpress from "/img/americanExpress.png"
import masterCard from "/img/masterCard.png"
import mercadoPago from "/img/mercadoPago.png"
import { Link as LinkMUI } from 'react-router-dom'

import { Grid, Icon, Typography, Link } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


import { styled } from '@mui/material/styles';


const StyledTypographyLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h4.fontFamily,
  fontWeight: 200,
  fontSize: '12px'
}));


const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h2.fontFamily,
  fontWeight: 400,
  fontSize: theme.typography.h4.fontSize,
}));



const stylePagos = {
  width: '40px',
  height: '45px'
}



const Footer = () => {
  return (
    <Grid container paddingTop='2rem' paddingBottom='2rem' paddingLeft={{xs:'2rem', sm:'0px'}} justifyContent='center' mt='5rem' alignSelf='end' gap={5} sx={{backgroundColor:'black', minHeight:`${heightFooter}rem`, height:'max-content'}}>
      <Grid item xs={11} sm={2}>
        <StyledTypographyTitle>NAVEGACION</StyledTypographyTitle>
        <Grid mt='5px'>
          <Grid><Link component={LinkMUI} to={'/tienda'}><StyledTypographyLink>TIENDA</StyledTypographyLink></Link></Grid>
          <Grid><StyledTypographyLink>TALLES</StyledTypographyLink></Grid>
          <Grid><StyledTypographyLink>CÓMO COMPRAR</StyledTypographyLink></Grid>
          <Grid><StyledTypographyLink>DEVOLUCIONES</StyledTypographyLink></Grid>
        </Grid>
      </Grid>

      <Grid item xs={11} sm={2}>
        <StyledTypographyTitle>MEDIOS DE PAGO</StyledTypographyTitle>
        <Grid mt='5px'>
              {/* todas las tarjetas que se acepten */}
          <img src={visa} alt={visa} style={stylePagos}/>
          <img src={americanExpress} alt={americanExpress} style={stylePagos}/>
          <img src={masterCard} alt={masterCard} style={stylePagos}/>
          <img src={mercadoPago} alt={mercadoPago} style={stylePagos}/>
        </Grid>
      </Grid>

      <Grid item xs={11} sm={2}>
        <StyledTypographyTitle>FORMAS DE ENVIO</StyledTypographyTitle>
        <Grid mt='5px'>
              {/* todas las tarjetas que se acepten */}
              <img src={visa} alt={visa} style={stylePagos}/>
        </Grid>
      </Grid>

      <Grid item xs={11} sm={2.3}>
        <StyledTypographyTitle>CONTACTO</StyledTypographyTitle>
        <Grid container direction='column' mt='5px' gap={0.5}>
          <Grid container direction='row'gap={1} alignItems='center'>
          <Icon sx={{color:"white"}}><InstagramIcon /></Icon>
          <StyledTypographyLink color='white'>ropadeportiva</StyledTypographyLink>
          </Grid>

          <Grid container direction='row'gap={1} alignItems='center'>
          <Icon sx={{color:"white"}}><WhatsAppIcon /></Icon>
          <StyledTypographyLink color='white'>+5493512466003</StyledTypographyLink>
          </Grid>

          <Grid container direction='row'gap={1} alignItems='center'>
          <Icon sx={{color:"white"}}><EmailIcon /></Icon>
          <StyledTypographyLink color='white'>ropadeportiva@ecommerce.com</StyledTypographyLink>
          </Grid>

        </Grid>
      </Grid>

    </Grid>
  )
}

export default Footer