import { Stack, IconButton, Typography } from "@mui/material"
import { useTheme, useMediaQuery } from '@mui/material';


const ItemLandingPage = ({ icono, titulo, subtitulo }) => {

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints

return(
<Stack flexDirection='row' alignItems='center' gap={2} sx={{width: "100%" }}>
  <Stack backgroundColor='#DBDBDB' borderRadius='90px' alignItems='start' >
     <IconButton>{icono}</IconButton>
  </Stack>
  <Stack>
     <Typography variant={isSmallScreen? 'h2':'h1'}>{titulo}</Typography>
     <Typography variant="p">{subtitulo}</Typography>
  </Stack>
 </Stack>
)

}


export default ItemLandingPage;
