import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import ImageGallery from '@/components/ImageGallery';

export default function Gallery() {
  return (
    <Container maxWidth="lg">
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
        <Box>
          <ImageGallery></ImageGallery>
        </Box>
      </Box>
    </Container>
  );
}