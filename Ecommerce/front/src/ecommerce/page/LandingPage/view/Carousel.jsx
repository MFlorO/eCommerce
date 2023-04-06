import { useState, useEffect } from 'react';

import { Grid, Button, Stack } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CircleIcon from '@mui/icons-material/Circle';


const style = {
    // opacity: 0,
    // transition: '1s'
}




const Carousell = ({ tipo, elementos }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(elementos[0]?.imagen);

    const anterior = () => setSelectedIndex((selectedIndex - 6 + elementos.length) % elementos.length)
        
    const siguiente = () => setSelectedIndex((selectedIndex + 6) % elementos.length);

    useEffect(() => {
        let interval = null;
        if (tipo === "autoplay") {
          interval = setInterval(() => {
            siguiente();
          }, 7000);
        }
        return () => clearInterval(interval);
      }, [tipo, selectedIndex]);

  
    const slicedElements = elementos?.slice(selectedIndex, selectedIndex + 6);
        

    return (
        <Grid container direction='row' width={{xs:'100%', sm:'100%'}} height={{xs:'10rem', sm:'20rem'}} justifyContent='center'>

        <Button onClick={anterior}><KeyboardArrowLeft/></Button>

        <Stack width='90%' height='100%' display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center' gap='0px 20px'>
        {slicedElements?.map( e => ( 
            <Stack key={e.codigo} display='flex' flexDirection='row' alignItems='center' width={{xs: '100%', sm: '15%'}}  height={{xs: '100%', sm: '100%'}}>
                <img src={e.imagen} alt={e.codigo}  style={{width:'100%', height:'100%', objectFit:'cover'}} />
            </Stack>
        ))}
        </Stack>

            <Button onClick={siguiente}><KeyboardArrowRight /></Button>
        </Grid>
    );
 }

export default Carousell