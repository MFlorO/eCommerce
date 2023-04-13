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
      <form onSubmit={handleSubmit}>
        <TextField
          label="Buscar por nombre o codigo"
          variant="outlined"
          type="text"
          fullWidth
          name={search}
          value={search}
          onChange={onSearchChange}
        />
      </form>
  );
};

export default Buscador;
