import { Stack, IconButton, Typography } from "@mui/material"



const ItemLanding = ({ icono, titulo, subtitulo }) => {

return(
<Stack flexDirection='row' alignItems='center' gap={2} sx={{width: "30%", minWidth: "20%" }}>
  <Stack backgroundColor='#DBDBDB' borderRadius='90px' alignItems='start' sx={{height:'max-content'}} >
     <IconButton>{icono}</IconButton>
  </Stack>
  <Stack>
     <Typography>{titulo}</Typography>
     <Typography>{subtitulo}</Typography>
  </Stack>
 </Stack>
)}


export default ItemLanding;
