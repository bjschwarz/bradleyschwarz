'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

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
    primary: {
      light: '#f6f6f6',
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
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
