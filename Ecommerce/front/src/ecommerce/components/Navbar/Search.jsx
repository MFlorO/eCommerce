import { Grid, InputAdornment, FormControl, Input, useTheme, useMediaQuery } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';



const Search = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints

  return (
    <Grid container alignItems='center'>
    <FormControl sx={{ m: 1, mt: 3, width: '250px' }} >
      <Input 
        placeholder="Buscar"
        endAdornment={<InputAdornment position="end"><SearchIcon sx={{color:'black'}} fontSize={isSmallScreen ? 'medium' : 'large'}/></InputAdornment>}
      />
    </FormControl>
    </Grid>
  )
}

export default Search