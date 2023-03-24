import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material/";

import CastIcon from "@mui/icons-material/Cast";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";



const ItemsPrincipales = () => {

  const navigate = useNavigate();

  useEffect(() => {
    
  }, [navigate]);


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
    
     {listas("", <CastIcon />, "Dashboard")}
      
     { listas("productos", <InventoryIcon  />, "Productos" ) }

     { listas("usuarios", <PersonIcon  />, "Usuarios" ) }

     { listas("ordenes", <ShoppingCartIcon  />, "Ordenes" ) }

     { listas("facturacion", <CreditCardIcon />, "Facturación" ) }

    </>
  );
};

export default ItemsPrincipales;