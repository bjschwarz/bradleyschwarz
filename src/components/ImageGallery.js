'use client'

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useRouter } from 'next/navigation'
import ProjectDetail from '@/components/ProjectDetail';
import React, { useState, useEffect } from "react";
import projects from '@/components/Projects';
import Image from 'next/image'

export default function MasonryImageList() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (item) => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
        {projects.map((item) => (
          <ImageListItem key={item.img}>
            <Image
              objectFit='cover'
              width={248}
              src={item.img}
              alt={item.title}
              loading="lazy"
              onClick={() => handleOpen(item)}
            />
            <ProjectDetail isDialogOpened={isOpen}
                handleCloseDialog={() => setIsOpen(false)} project={item}></ProjectDetail>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
