import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image'
import Box from '@mui/material/Box';
import theme from '@/theme';

export default function StandardImageList({project}) {
  return (
    <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.background.default
        }}
      >
      <ImageList variant="masonry" cols={2} gap={8}>
        {project.additional_images.map((item) => (
          <ImageListItem key={item.title}>
            <Image
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}