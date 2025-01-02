import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#573C2C',
    },
    secondary: {
      main: '#CCB878',
    },
    background: {
      default: '#E9E9E9',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#573C2C',
    },
    secondary: {
      main: '#CCB878',
    },
    background: {
      default: '#282828',
      paper: '#1d1d1d',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});