import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F8BBD0',
    },
    secondary: {
      main: '#D0CDD2',
    },
    // error:{
    //   main: ''
    // },
    // success:{
    //   main: '',
    // },
    background:{
      main: '#151012'
    }
  },
  shadows: [ 'none', '0px 5px 5px rgba(0, 0, 0, 0.2)', '2px 2px 2px rgba(86,48,63,0.3)' ]
});

export default theme