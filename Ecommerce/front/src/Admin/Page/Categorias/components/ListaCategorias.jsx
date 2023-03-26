import { useState } from "react";
import { useDispatch } from 'react-redux';

import { Button, ListItemButton, ListItemText, Switch} from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/system";

import { UpdateCategorias } from '~/redux/slice/admin/thunks';


const ListaCategorias = ({ id, nombre, isActive }) => {

  const dispatch = useDispatch()

  const [checked, setChecked] = useState(true);

  // const handleToggle = (value) => () => {
    // const currentIndex = checked.indexOf(value);
    // const newChecked = [...checked];
    // if (currentIndex === -1) {
    //   newChecked.push(value);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }
    // setChecked(newChecked);
  // };

  
  const onClickEdit = (body) => dispatch(UpdateCategorias(body))

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

        <Button onClick={() => onClickEdit({id,nombre})}><EditIcon /></Button>
        <Button><DeleteIcon /></Button>

        </Stack>

    </>
  );
};

export default ListaCategorias;
