import { useState } from 'react';

import { useTheme, useMediaQuery, Typography, Grid, Button } from '@mui/material';
import FiltrosMobile from './FiltrosMobile';
import FiltrosItems from './FiltrosItems/FiltrosItems';






const Filtros = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints

  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <Grid container minHeight='4rem' pt={2} direction='column' gap={2}>

    { isSmallScreen ? 

      // FILTROS PARA MOBILE 
    <>
    <Button variant='contained' onClick={() => setOpenDrawer(!openDrawer)}><Typography variant="h3">FILTROS</Typography></Button>
    <FiltrosMobile openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
     
      //  FILTROS PARA DESKTOP 
     : 
     
     <>
      <Typography variant='h2'>Filtros</Typography>
      <FiltrosItems />
     </>

    }

    </Grid>
  )
}

export default Filtros