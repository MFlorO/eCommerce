import { Grid, Typography, Stack } from '@mui/material'


const PublicidadLayout = ({titulo, productos}) => {
   
  return (
  <Grid container >

    <Grid container direction='row' justifyContent='center' alignItems='center' sx={{minHeight:'max-content'}}>
      <Grid alignItems='center' item sx={{borderBottom: 'solid 2px #DBDBDB' }} xs={4}></Grid>
      <Grid textAlign='center' alignSelf='end'item xs={2}>{titulo}</Grid>
      <Grid alignItems='center' item sx={{borderBottom: 'solid 2px #DBDBDB' }} xs={4}> </Grid>
    </Grid>

    <Grid mt={5} alignItems='center' paddingLeft={2} paddingRight={2} 
    sx={{display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap:'30px 40px'}}>
      {productos?.map( p => (
        <Stack key={p.codigo} sx={{ backgroundColor:'#DBDBDB'}} >
        <img src={p.imagen} alt='imagen'/>
        <Typography>{p.nombre}</Typography>
        <Typography>$ {p.precio}</Typography>
       </Stack>
      ))
      }
    </Grid>

  </Grid>
  )
}

export default PublicidadLayout;