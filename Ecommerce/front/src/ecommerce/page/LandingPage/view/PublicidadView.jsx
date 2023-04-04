import { useEffect, useState } from 'react'
import useProductos from "~/Hook/useProductos";
import { Button, Grid, Stack, Typography } from '@mui/material'


const PublicidadView = ({ titulo }) => {

  const productos = useProductos();

  const [productosCopia, setProductosCopia] = useState(productos)

  const productos8 = productosCopia.slice(0,8)

  const [productosSale, setProductosSale] = useState(productosCopia)

  useEffect(() => {
    setProductosCopia(productos)
    setProductosSale(productos8)
  }, [productosCopia, productos])


  const onMostrar = () => setProductosSale(productosCopia)
   
  return (
    <Grid container mt='6rem' mb='2rem' justifyContent='center' gap={{xs:4, sm:6}} sx={{minHeight:'20rem', heigh:'max-content'}} >

    <Grid container justifyContent='center' alignItems='center' sx={{minHeight:'max-content'}} gap={{xs:2, sm:0}}>
      <Grid alignItems='center' item sx={{borderBottom: 'solid 2px #DBDBDB' }} xs={12} sm={4}></Grid>
      <Grid textAlign='center' alignSelf='center'item xs={12} sm={2}><Typography variant='h1'>{titulo}</Typography></Grid>
      <Grid alignItems='center' item sx={{borderBottom: 'solid 2px #DBDBDB' }} xs={12} sm={4}> </Grid>
    </Grid>

    <Grid mt={5} alignItems='center' paddingLeft={{xs:0,sm:2}} paddingRight={{xs:0,sm:2}} 
    display='grid' gridTemplateColumns={{xs:'repeat(2, auto)',sm:'repeat(4, auto)'}} gap={{ xs:'20px 10px', sm:'30px 40px'}}

    >
      {productosSale?.map( p => (
        <Stack key={p.codigo} sx={{ backgroundColor:'#DBDBDB'}} >
        <img src={p.imagen} alt='imagen' style={{width:'100%'}}/>
        <Typography>{p.nombre}</Typography>
        <Typography>$ {p.precio}</Typography>
       </Stack>
      ))
      }
    </Grid>

    {titulo === 'SALE' && <Grid item textAlign='center' xs={12} ><Button variant='outlined' onClick={onMostrar}>MOSTRAR</Button></Grid>}
  </Grid>
  )
}

export default PublicidadView;