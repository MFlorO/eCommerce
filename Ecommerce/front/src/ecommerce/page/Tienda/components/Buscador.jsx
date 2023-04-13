import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, TextField } from "@mui/material";



const Buscador = () => {

  const navigate = useNavigate()

  const [search, setSearch] = useState("");


  const onSearchChange = (event) => setSearch(event.target.value);


  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/tienda?q=${search}`)
    setSearch("");
  };


  return (
    <Grid container direction="column" height="6rem" p={2} justifyContent="center" gap={1} sx={{ width: "100%" }} >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Buscar por nombre o codigo"
          variant="outlined"
          type="text"
          name={search}
          value={search}
          onChange={onSearchChange}
        />
      </form>
    </Grid>
  );
};

export default Buscador;
