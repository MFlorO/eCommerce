import { Grid, InputAdornment, FormControl, Input } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';



const Search = () => {

  return (
    <Grid container alignItems='center'>
    <FormControl sx={{ m: 1, width: '250px' }} >
      <Input 
        placeholder="Buscar"
        endAdornment={<InputAdornment position="end"><SearchIcon sx={{color:'black'}} fontSize='medium'/></InputAdornment>}
      />
    </FormControl>
    </Grid>
  )
}

export default Search