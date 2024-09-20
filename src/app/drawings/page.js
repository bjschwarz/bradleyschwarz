import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import drawings from '@/components/Drawings';
import Image from 'next/image'

export default function Drawings() {
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
          Drawings
        </Typography>
        <Box>
            <ImageList variant="masonry" cols={3} gap={8}>
            {drawings.map((item) => (
            <ImageListItem key={item.title}>
                <Image
                    style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '500px',
                    }}
                    src={item.img}
                    alt={item.title}
                    loading="eager"
                    priority={true}
                />
            </ImageListItem>
            ))}
            </ImageList>
        </Box>
      </Box>
    </Container>
  );
}