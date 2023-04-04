import { Stack, IconButton, Typography } from "@mui/material"



const ItemLandingPage = ({ icono, titulo, subtitulo }) => {

return(
<Stack flexDirection='row' alignItems='center' gap={2} sx={{width: "100%" }}>
  <Stack backgroundColor='#DBDBDB' borderRadius='90px' alignItems='start' >
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
