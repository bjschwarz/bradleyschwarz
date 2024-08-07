'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { Height } from '@mui/icons-material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#272727'
    },
    background: {
      default: '#f6f6f6'
    },
    text: {
      default: '#272727',
      contrastText: "f6f6f6"
    },
    primary: {
      light: '#4b4b4b',
      main: '#f6f6f6',
      dark: '#002884',
      contrastText: '#272727',
    },
    secondary: {
      light: '#272727',
      main: '#272727',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: theme.palette.primary.light,
          }),
        }),
      },
    },
  },
});

export default theme;
