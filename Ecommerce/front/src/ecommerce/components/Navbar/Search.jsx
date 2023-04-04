import { InputAdornment, FormControl, Input } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';



const Search = () => {
  return (
    <FormControl sx={{ m: 1, mt: 3, width: '250px' }}>
      <Input
        placeholder="Buscar"
        endAdornment={<InputAdornment position="end"><SearchIcon sx={{color:'black'}}/></InputAdornment>}
      />
    </FormControl>
  )
}

export default Search