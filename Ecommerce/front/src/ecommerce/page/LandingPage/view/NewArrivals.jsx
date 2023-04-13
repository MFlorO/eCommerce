import { Link as LinkMUI } from 'react-router-dom'
import Carousell from './Carousel'
import useProductos from "~/Hook/useProductos";

import { Link , Grid } from '@mui/material'


const NewArrivals = () => {
    
  const { productos } = useProductos()

  return (  
    <>

    <Grid container width={{xs:'100%',sm:'50%'}} height={{xs:'20rem', sm:'40rem'}} mt='4rem'>
      <Link component={LinkMUI} sx={{width:'100%', height:'100%', cursor:'pointer'}} to={'/tienda'}>
      <Grid sx={{backgroundImage: 'url(/img/newArrivals.jpg)', backgroundSize:'cover', backgroundPosition:'center',
        width:'100%', height:'100%'}} >
      </Grid>
      </Link>
    </Grid>

    <Carousell tipo='autoplay' elementos={productos}/>

    </>
  )
}

export default NewArrivals