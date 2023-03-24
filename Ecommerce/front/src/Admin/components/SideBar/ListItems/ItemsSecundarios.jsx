// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";



const ItemsSecundarios = () => {

  const navigate = useNavigate();


  // useEffect(() => {
  //   navigate;
  // }, []);



  const listas = (navigateDireccion, icono, texto) => {
    return (
      <ListItemButton onClick={() => navigate(`/dashboard/admin/${navigateDireccion}`)}>
        <ListItemIcon>{icono}</ListItemIcon>
        <ListItemText primary={texto} />
      </ListItemButton>
    );
  };



  return (
    <>

       <ListSubheader component="div">
         <Typography component="h6" fontSize={12} fontWeight={600} textAlign='center' marginTop='1rem' marginBottom='1rem'>ADMINISTRADOR</Typography>
       </ListSubheader>

      {listas("perfil", <AccountCircleIcon />, "Perfil")}

      {listas("login", <CloseIcon color='error'/>, "Cerrar Sesión")}

    </>
  );
};

export default ItemsSecundarios;