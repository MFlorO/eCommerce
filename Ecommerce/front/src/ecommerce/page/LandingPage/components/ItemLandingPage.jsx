import { Stack, IconButton, Typography } from "@mui/material"



const ItemLandingPage = ({ icono, titulo, subtitulo }) => {

return(
<Stack flexDirection='row' alignItems='center' gap={2} sx={{width: "25%", minWidth: "20%" }}>
  <Stack backgroundColor='#DBDBDB' borderRadius='90px' alignItems='start' sx={{height:'max-content'}} >
     <IconButton>{icono}</IconButton>
  </Stack>
  <Stack>
     <Typography variant="h2">{titulo}</Typography>
     <Typography variant="p">{subtitulo}</Typography>
  </Stack>
 </Stack>
)

}


export default ItemLandingPage;
