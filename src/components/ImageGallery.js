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

  const [curr, setcurr] = useState(0);

  const handleOpen = (item) => {
    setIsOpen(!isOpen);
    setcurr(item)
  };

  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
        {projects.map((item) => (
          <ImageListItem key={item.title}>
            <Image
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '500px'
              }}
              src={item.img}
              alt={item.title}
              loading="lazy"
              onClick={() => handleOpen(item)}
            />
          </ImageListItem>
        ))}
      </ImageList>
        <ProjectDetail isDialogOpened={isOpen}
            handleCloseDialog={() => setIsOpen(false)} project={curr}></ProjectDetail>
    </Box>
  );
}
