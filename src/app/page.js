'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import TitleBar from '@/components/TitleBar';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import items from "@/components/Projects";
import Carousel from '@/components/Carousel';
import Image from 'next/image'
import { useRef } from 'react';
import { Icon } from '@mui/material';
import IconButton from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default function Home() {

  const imagegallery = useRef(null);

  const scroll = (scrollOffset) => {
    console.log(imagegallery)
    imagegallery.current.scrollLeft += scrollOffset;
  };

  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
  }));

  return (
    <Container sx={{paddingTop: '64px'}} maxWidth="lg">
      <TitleBar></TitleBar>
      <Box
        sx={{
          mt:6,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}
      >
        <Box sx={{
                 borderRadius: '10px',
                 paddingTop: '30px',
                 paddingBlock: '30px',
                 backgroundColor: '#222',
                 textAlign: 'center',
                 paddingRight: '5px',
                 paddingLeft: '5px',
                }}>

          <Typography sx={{
            display: { xs: 'none', sm: 'block' }, textTransform: 'uppercase'}} color="primary" variant="h6">
          <i>Documenting pregnancy, homebirth, & postpartum for women and families in central NC</i>
          </Typography>

          <Typography sx={{
            display: {  sm: 'none', md: 'none', lg: 'none' }, textTransform: 'uppercase'}} color="primary" variant="body">
          <i>Documenting pregnancy, homebirth, & postpartum for women and families in central NC</i>
          </Typography>
        </Box>

        <Typography variant="h4">
        <b>OFFERINGS</b>
        </Typography>

        <Typography variant="body" component="">
        I offer both video & photo imagery to preserve precious memories along your motherhood journey. From portraits of your growing belly, to the unique story of your homebirth, and of course the beloved fresh newborn session, you will be seen in your splendor. Based in Durham, serving the Triangle area, Raleigh, Chapel Hill, Cary, Hillsborough, etc.
        </Typography>
        <Carousel></Carousel>
        <Typography variant="body">
        <b>blah</b><br/>
        blah 
        </Typography>



        <Box sx={{
                 paddingTop: '30px',
                 paddingBlock: '30px',
                 backgroundColor: '#222',
                 textAlign: 'center',
                 borderRadius: '10px'
                }}>

          <Typography  variant="h6">
          <Button size='large' variant='outlined' color='primary' href='https://docs.google.com/forms/d/12W7H8DgLQ1iJb03keb_bJhkgMpZAmQHyotRfR2NKnM8/edit'>Reservation Form</Button>
          </Typography>
        </Box>

       
      </Box>
    </Container>
  );
}