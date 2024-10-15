import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import InputSlide from '@/components/InputSlide';
import TitleBar from '@/components/TitleBar';


export default function Contact() {
  return (
    <Container sx={{paddingTop: '64px'}} maxWidth="lg">
      <TitleBar></TitleBar>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Contact
        </Typography>
        <Box >
          <InputSlide/>
        </Box>
      </Box>
    </Container>
  );
}