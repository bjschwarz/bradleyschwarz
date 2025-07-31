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

// app/layout.jsx or app/layout.tsx
import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout(props) {


  return (
    <html lang="en">
      <body>
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