import { Link , Grid } from '@mui/material'
import { Link as LinkMUI } from 'react-router-dom'



const NewArrivals = () => {
    
  return (
    <Grid container width={{xs:'100%',sm:'50%'}} height={{xs:'20rem', sm:'40rem'}} mt='4rem' >
    <Link component={LinkMUI} sx={{width:'100%', height:'100%', cursor:'pointer'}} to={'/search'}>
    <Grid sx={{backgroundImage: 'url(/img/newArrivals.jpg)', backgroundSize:'cover', backgroundPosition:'center',
    width:'100%', height:'100%'}} >

    </Grid>
    </Link>
    </Grid>
  )
}

export default NewArrivals