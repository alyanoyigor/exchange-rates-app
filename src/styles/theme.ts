import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"Lato", sans-serif',
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#1B1F24',
    },
    common: {
      black: '#0a0a0a',
      white: '#fafafa',
    },
    primary: {
      main: '#31C6D4',
    },
  },
});

export default theme;
