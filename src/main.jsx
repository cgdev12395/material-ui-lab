import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { teal } from '@mui/material/colors';

const theme = createTheme ({
  palette: {
    primary: { main: teal[200]},
    secondary: { main: teal[400]},
    tertiary: { main: '#4a2d6e'},

    texts: { main: 'white' },
    divider: { main: '#222'}
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
