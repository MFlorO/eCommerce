import { useState } from "react";
// import { useDispatch } from 'react-redux';
import EditCategoria from "./EditCategoria";

import { Button, ListItemText, Switch, Stack} from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";



const ListaCategorias = ({ id, nombre, isActive }) => {

  const [modal, setModal] = useState(false);

  // const dispatch = useDispatch()

  return (
    <>
        <ListItemText primary={nombre} />

        <Stack flexDirection='row'>
          <Switch
          
          //   onChange={handleToggle('wifi')}
          //   checked={checked.indexOf('wifi') !== -1}
          //   inputProps={{
          //     'aria-labelledby': 'switch-list-label-wifi',
          //   }}
        />

        <Button onClick={() => setModal(true)}><EditIcon /></Button>
        <EditCategoria modal={modal} setModal={setModal}/>

        <Button><DeleteIcon /></Button>

        </Stack>

    </>
  );
};

export default ListaCategorias;
