import React, {useState} from 'react';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';



// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';


import { SideBar } from '../components/SideBar';
import NavBar from '../components/NavBar';



export const drawerWidth = 240;


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" >
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}










const mdTheme = createTheme();




function Dashhboard({children}) {

  const [open, setOpen] = useState(true);




  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', background:'red' }}>


       <NavBar />
       <SideBar/>
       
       {children}

        <Box
          // component="main"
          // sx={{
          //   backgroundColor: (theme) =>
          //     theme.palette.mode === 'light'
          //       ? theme.palette.grey[100]
          //       : theme.palette.grey[900],
          //   flexGrow: 1,
          //   height: '100vh',
          //   overflow: 'auto',
          // }}
        >
          {/* <Toolbar /> */}
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Chart /> */}
                  CHART
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Deposits /> */}
                  DEPOSITS
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* <Orders /> */}
                  ORDERS
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}






const AdminLayOut = () => {
  return (
    <Dashhboard />
  )
}

export default AdminLayOut;



