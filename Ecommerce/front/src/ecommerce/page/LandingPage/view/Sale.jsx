import { useEffect, useState } from 'react'
import useProductos from "~/Hook/useProductos";
import { Button, Grid, Stack, Typography } from '@mui/material'


const Sale = () => {

  const { productosCopia } = useProductos();

  const productos8 = productosCopia.slice(0,8)

  const [productosSale, setProductosSale] = useState(productosCopia)

  useEffect(() => {
  setProductosSale(productos8)
  }, [productosCopia])


  const onMostrar = () => productosSale.length <= 8 ? setProductosSale(productosCopia) : setProductosSale(productos8)
   
  return (
    <Grid container mt='6rem' mb='2rem' justifyContent='center' gap={{xs:4, sm:6}} sx={{minHeight:'20rem', heigh:'max-content'}} >

    <Grid container justifyContent='center' alignItems='center' sx={{minHeight:'max-content'}} gap={{xs:2, sm:0}}>
      <Grid alignItems='center' item sx={{borderBottom: 'solid 2px #DBDBDB' }} xs={12} sm={4}></Grid>
      <Grid textAlign='center' alignSelf='center'item xs={12} sm={2}><Typography variant='h1'>SALE</Typography></Grid>
      <Grid alignItems='center' item sx={{borderBottom: 'solid 2px #DBDBDB' }} xs={12} sm={4}> </Grid>
    </Grid>

    <Grid mt={5} alignItems='center' display='grid' gridTemplateColumns={{xs:'repeat(2, auto)',sm:'repeat(4, auto)'}} gap={{ xs:'20px 10px', sm:'50px 60px'}}>
      {productosSale?.map( p => (
        <Stack key={p.codigo} sx={{ backgroundColor:'#DBDBDB'}} width={{xs:'9rem', sm:'15rem'}} height={{xs: '100%', sm: '100%'}} >
          <img src={p.imagen} alt={p.codigo}  style={{width:'100%', height:'100%', objectFit:'cover'}} />
          <Typography>{p.nombre}</Typography>
          <Typography>$ {p.precio}</Typography>
       </Stack>
      ))
      }
    </Grid>

    <Grid item textAlign='center' xs={12} marginTop='2rem'>
      <Button variant='contained' onClick={onMostrar} size='large'>{productosSale.length <=  8 ? 'MOSTRAR TODOS LOS PRODUCTOS' : 'MOSTRAR MENOS'}</Button>
    </Grid>
  </Grid>
  )
}

export default Sale;