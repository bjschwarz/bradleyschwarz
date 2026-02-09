'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import Box from '@mui/material/Box';
import { Padding } from '@mui/icons-material';
import { GlobalStyles } from '@mui/material';
import Copyright from '@/components/Copyright';
import Script from 'next/script';

// app/layout.jsx or app/layout.tsx
import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout(props) {


  return (
    <html lang="en">
      <body>
          <Script
        id="facebook-pixel"
        strategy="afterInteractive"
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2136021650529957');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=2136021650529957&ev=PageView&noscript=1`}
        />
      </noscript>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <GoogleTagManager gtmId="G-JH6VP5ZCPR" />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <GlobalStyles
              styles={(theme) => ({
                html: {
                  height: "100%",
                  backgroundColor: theme.palette.background.default
                },
                body: {
                  height: "100%",
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  fontFamily: theme.typography.fontFamily
                }
                // ... You can add more global styles here
              })}
            />
            <Box sx={{ display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', }}>
              {props.children}
            
              <Box
                component="footer"
                sx={{
                  py: 3,
                  px: 2,
                  mt: 'auto',
                }}
              >
              <Copyright />
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}