import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image'
import Box from '@mui/material/Box';

export default function StandardImageList({project}) {
  return (
    <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <ImageList cols={2} gap={8}>
        {project.additional_images.map((item) => (
          <ImageListItem key={item.img}>
            <Image
                objectFit='cover'
                width={500}
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