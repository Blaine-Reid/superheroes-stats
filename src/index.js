import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'

// Custom Material UI Theme
import theme from './variants/materialVariants'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// React Router DOM
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>,
  document.querySelector('#root'),
);