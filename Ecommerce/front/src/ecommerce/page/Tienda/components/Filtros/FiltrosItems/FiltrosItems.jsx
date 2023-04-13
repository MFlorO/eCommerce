import FiltrosPorCategoria from "./FiltrosPorCategoria"
import { Typography } from '@mui/material'



const FiltrosItems = () => {
  return (
    <form>

     <FiltrosPorCategoria />


     <Typography>Por Color</Typography>


     <Typography>Por Talle</Typography>


    </form>
  )
}

export default FiltrosItems