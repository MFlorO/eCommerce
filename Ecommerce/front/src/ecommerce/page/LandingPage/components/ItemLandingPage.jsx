import { Stack, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material"


const ItemLandingPage = ({ icono, titulo, subtitulo }) => {

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints

return(
<Stack flexDirection='row' alignItems='center' gap={2} width={{xs:'90%', sm:'90%'}}>
  <Stack backgroundColor='#DBDBDB' borderRadius='90px' alignItems='start'>
     <IconButton style={{cursor:'initial', pointerEvents:'none'}} >{icono}</IconButton>
  </Stack>
  <Stack>
     <Typography variant={isSmallScreen? 'h4':'h2'}>{titulo}</Typography>
     <Typography variant="p" fontSize={isSmallScreen? '10px':'12px'}>{subtitulo}</Typography>
  </Stack>
 </Stack>
)

}


export default ItemLandingPage;
