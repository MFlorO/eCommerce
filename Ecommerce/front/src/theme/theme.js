import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#94A2BD',
    },
    secondary: {
      main: '#021B4C',
    },
    background:{
      main: '#151012'
    }
  },
  shadows: [ 'none', '0px 5px 5px rgba(0, 0, 0, 0.2)', '2px 2px 2px rgba(86,48,63,0.3)' ],
  typography: {
    h1:{
      fontFamily: 'Montserrat',
      fontWeight:  600,
      fontSize: '24px'
    },
    h2:{
      fontFamily: 'Montserrat',
      fontWeight:  600,
      fontSize: '18px'
    },
    h3:{
      fontFamily: 'Montserrat',
      fontWeight:  400,
      fontSize: '18px'
    },
    h4:{
      fontFamily: 'Montserrat',
      fontWeight:  400,
      fontSize: '15px'
    },
    h5:{
      fontFamily: 'Montserrat',
      fontWeight:  200,
      fontSize: '15px'
    },
    p:{
      fontFamily: 'Montserrat',
      fontWeight:  400,
      fontSize: '13px'
    },
  }
});

export default theme