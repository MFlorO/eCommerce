import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material/';

import CastIcon from '@mui/icons-material/Cast';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';



export const mainListItems = (
    <>
      <ListItemButton>
        <ListItemIcon>
          <CastIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
  
      <ListItemButton>
        <ListItemIcon>
          <InventoryIcon  />
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItemButton>
  
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon  />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItemButton>
  
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon  />
        </ListItemIcon>
        <ListItemText primary="Ordenes" />
      </ListItemButton>
  
      <ListItemButton>
        <ListItemIcon>
          <CreditCardIcon  />
        </ListItemIcon>
        <ListItemText primary="Facturación" />
      </ListItemButton>
  
    </>
  );
  
  
export const secondaryListItems = (
    <>
      <ListSubheader component="div">
        <Typography component="h6" fontSize={12} fontWeight={600} textAlign='center' marginTop='1rem' marginBottom='1rem'>ADMINISTRADOR</Typography>
      </ListSubheader>
  
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon  />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItemButton>
  
      <ListItemButton>
        <ListItemIcon >
          <CloseIcon color='error'/>
        </ListItemIcon>
        <ListItemText primary="Cerrar Sesión" />
      </ListItemButton>
  
    </>
  );