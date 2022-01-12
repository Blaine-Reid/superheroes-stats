import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
    palette: {
      type: 'dark',
      background: {
        default: "#303030",
        paper:'#424242'
      },
      primary: {
        main: '#262627',
      },
      secondary: {
        main: '#f50000',
        light:'#fff'
      },
      text:{
        primary:'#fff',
        secondary:'#eee'
      },
      error: {
        main: '#f10c00',
      },
    }
  });
  

export default theme
