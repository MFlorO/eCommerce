import { useState } from "react";

import { ListItemButton, ListItemText, Switch} from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/system";




const ListaCategorias = ({ nombre, isActive }) => {
  const [checked, setChecked] = useState(true);

  const handleToggle = (value) => () => {
    // const currentIndex = checked.indexOf(value);
    // const newChecked = [...checked];
    // if (currentIndex === -1) {
    //   newChecked.push(value);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }
    // setChecked(newChecked);
  };

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

        <ListItemButton>
          <EditIcon />
        </ListItemButton>

        <ListItemButton>
          <DeleteIcon />
        </ListItemButton>

        </Stack>

    </>
  );
};

export default ListaCategorias;
