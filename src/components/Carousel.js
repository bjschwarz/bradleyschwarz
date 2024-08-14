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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'end',
        }}
      >
      <ImageList variant="masonry" cols={1} gap={8}>
        {project.additional_images.map((item) => (
          <ImageListItem key={item.title}>
            <Image
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                }}
                src={item.img}
                alt={item.title}
                loading="eager"
              />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}