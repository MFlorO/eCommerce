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
    <Grid container mt='6rem' mb='2rem' justifyContent='center' gap={6} sx={{minHeight:'20rem', heigh:'max-content'}}>

    <Grid container direction='row' justifyContent='center' alignItems='center' sx={{minHeight:'max-content'}}>
      <Grid alignItems='center' item sx={{borderBottom: 'solid 2px #DBDBDB' }} xs={4}></Grid>
      <Grid textAlign='center' alignSelf='end'item xs={2}><Typography variant='h1'>{titulo}</Typography></Grid>
      <Grid alignItems='center' item sx={{borderBottom: 'solid 2px #DBDBDB' }} xs={4}> </Grid>
    </Grid>

    <Grid mt={5} alignItems='center' paddingLeft={2} paddingRight={2} 
    sx={{display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap:'30px 40px'}}>
      {productosSale?.map( p => (
        <Stack key={p.codigo} sx={{ backgroundColor:'#DBDBDB'}} >
        <img src={p.imagen} alt='imagen'/>
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