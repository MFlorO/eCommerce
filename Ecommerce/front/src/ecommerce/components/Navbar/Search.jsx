import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, InputAdornment, Input } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
  
  const navigate = useNavigate()
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => setSearch(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch("");
    navigate(`/tienda?q=${search}`)
  };

  return (
    <Grid container alignItems='center'>
    <form onSubmit={handleSubmit}>
      <Input 
        sx={{width:'250px'}} 
        value={search}
        placeholder="Buscar por nombre o codigo"
        onChange={onSearchChange}
        endAdornment={<InputAdornment position="end"><SearchIcon sx={{color:'black'}} fontSize='medium'/></InputAdornment>}
      />
    </form>
    </Grid>
  )
}

export default Search