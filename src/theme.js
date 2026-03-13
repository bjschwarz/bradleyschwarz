'use client';
import { Courier_Prime } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { Height } from '@mui/icons-material';
import { Besley } from 'next/font/google';
import localFont from 'next/font/local'

const courier = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const besley = Besley({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const myFont = localFont({
  src: './../public/fonts/Clarendon Regular.woff',
  weight: '700',
  style: 'normal',

  
  
})

// const myFont = localFont({
//   src: [
//     {
//        src: './../public/fonts/Clarendon Regular.woff',
//       weight: '00',
//       style: 'normal',
//     },
//     {
//       src: './../public/fonts/Clarendon Bold.woff',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-my-font', // Define a CSS variable name
// });


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
      dark: '#4b4b4b',
      contrastText: '#272727',
    },
    secondary: {
      light: '#272727',
      main: '#272727',
      dark: '#111111',
      contrastText: '#f6f6f6',
    },
  },
  typography: {
    fontFamily: myFont.style.fontFamily,
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
