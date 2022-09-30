import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';

import App from './App';
import globalStyles from './styles/globalStyles';
import theme from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles styles={globalStyles} />
    <App />
  </ThemeProvider>
);
