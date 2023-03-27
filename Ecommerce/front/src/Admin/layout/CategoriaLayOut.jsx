import { Typography, Button } from "@mui/material"


const CategoriaLayOut = ({titulo, onSubmit, boton, children}) => {

  return (
    <form style={{ display:'flex', flexDirection:'column', gap:'1.5rem'}} onSubmit={onSubmit}>
     <Typography component="h5" variant="h6" textAlign='center'>{titulo}</Typography>
      {children}
    <Button variant="contained" type="submit" >{boton}</Button>
    </form>

  )
}

export default CategoriaLayOut