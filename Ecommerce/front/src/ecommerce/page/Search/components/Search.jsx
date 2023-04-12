import { Grid, Typography } from "@mui/material";



const Search = () => {
  return (
    <Grid container direction='column' height='6rem' p={2} justifyContent='center' gap={1} sx={{width:'100%'}}>
    <Typography>Buscar</Typography>

      <input style={{height:'2rem', borderRadius:'5px', border:'2px solid #DBDBDB'}}/>

    </Grid>
  )
};

export default Search;
