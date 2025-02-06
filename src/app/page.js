'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import HomeTitlebar from '@/components/HomeTitlebar';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Carousel from '@/components/Carousel';
import Image from 'next/image'
import { useRef, useEffect, setHeight, useState, createRef } from 'react';
import { Icon } from '@mui/material';
import IconButton from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default function Home() {


  return (
    <Container maxWidth="false" disableGutters>
        <HomeTitlebar></HomeTitlebar>

      <Container maxWidth="lg">
      <Box        
        sx={{
          mt:6,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}
      >
        <Box sx={{
                  display: {  sm: 'none', md: 'none', lg: 'none' },
                 borderRadius: '10px',
                 paddingTop: '30px',
                 paddingBlock: '30px',
                 backgroundColor: '#222',
                 textAlign: 'center',
                 paddingRight: '5px',
                 paddingLeft: '5px',
                }}>

          <Typography sx={{
             textTransform: 'uppercase'}} color="primary" variant="body">
          <i>Hardware • Lighting • Art • Fireplace • Architectural • Reproduction • Restoration</i>
          </Typography>
        </Box>

        <Typography variant="h4">
        <b>Artisan Ironwork</b>
        </Typography>

        <Typography variant="body" component="">
        {/* I specialize in artisan quality ironwork, greatly influenced from present and past masters. My aim is to craft new works using traditional methods while observing and evolving the inspiring masterpieces of the ages. This mentality is applied to create custom designs for specific projects, as well as seemlessly matching historic works.   */}

        I am inspired by the elegant work of antiquity. Before modern machine manufacturing, blacksmiths forged their works using skills earned from years of practice and dedication to the craft. With nothing more than simple hand tools, which they also made themselves, these early smiths created some of the world's most awe-inspiring ironwork. This mentality, to achieve perfection with nothing but one's own hands, is what I strive to bring to my work.
        </Typography>
        <Carousel></Carousel>
        <Typography variant="body">

        {/* <Typography variant="h4">
        <b>About</b>
        </Typography>
        I am a blacksmith in Durham North Carolina.  */}
        </Typography>

        <Box sx={{
                 paddingTop: '30px',
                 paddingBlock: '30px',
                 backgroundColor: '#222',
                 textAlign: 'center',
                 borderRadius: '10px'
                }}>
          <Typography  variant="h6">
          <Button size='large' variant='outlined' color='primary' target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScklFzqFSGL-NO8zURQed83qXA1TJYo1UkqbhVkSXaQK4GTCA/viewform?usp=sf_link'>Custom Ironwork Commission Inquiry Form</Button>
          </Typography>
        </Box>

       
      </Box>
      </Container>
    </Container>
  );
}