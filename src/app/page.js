import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import ImageGallery from '@/components/ImageGallery';
import TitleBar from '@/components/TitleBar';


export default function Gallery() {
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
          Gallery
        </Typography>
        <Typography variant="body" component="h4" sx={{ mb: 0 }}>
          *Click for additional images
        </Typography>
        <Box>
          <ImageGallery></ImageGallery>
        </Box>
      </Box>
    </Container>
  );
}