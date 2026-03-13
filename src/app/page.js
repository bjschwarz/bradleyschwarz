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
import detail from "../../public/images/20251228_bss_portfolio_logbaskets_0068.jpg"


export default function Home() {
  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
  }));

  return (
    
    <Container maxWidth="false" disableGutters>
        <HomeTitlebar></HomeTitlebar>

      <Container maxWidth="lg">
      <Box        
        sx={{
          mt:6,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          gap: 10
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

        <Typography variant="body">

        In medieval architecture, ironwork marked moments of transition. Opening a gate, grasping a handle, or passing through a doorway became a deliberate, tactile experience. In a world increasingly defined by speed and disposability, I believe there remains tremendous value in continuing this lineage of creating objects slowly, deliberately, and with the ultimate goal of enduring for generations.
        </Typography>

       <Box
        sx={{
          my: 4,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        >
          <Grid container spacing={4}>
            <Grid xs={12} md={6}>
              <Item elevation={0}>
                <Image
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  src={detail}
                  alt='logo'
                  loading="eager"
                />
              </Item>
            </Grid>
            <Grid xs={12} md={6}>
              <Item elevation={0}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                  }}>
                  <Typography variant="h5" component="">
                  Portfolio                  
                  </Typography>
                  <Typography variant="body" component="">
                  Take a closer look at some of my recent work. Spanning from custom hardware to large-scale architectural projects, each piece is designed and forged with the same attention to detail and commitment to craftsmanship.

                  </Typography>
                  <Typography variant="body" component="">
                    <a href='/gallery' style={{color: '#222', textDecoration: 'underline', fontSize: '1.1rem'}}>See More</a>      

                  </Typography>

                  
                </Box>
              </Item>
            </Grid>     
          </Grid>
        </Box>

        <Carousel></Carousel>

        
        <Button sx={{
        height: 150, // Explicit height
        fontSize: '1.75rem', // Larger font size
        padding: '10px 20px', // Custom padding
        minWidth: 0, // Override default minWidth
      }} size='large' color='secondary' variant='contained' target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScklFzqFSGL-NO8zURQed83qXA1TJYo1UkqbhVkSXaQK4GTCA/viewform?usp=sf_link'>Custom Ironwork Commission Inquiry Form</Button>
   
       
      </Box>
      </Container>
    </Container>
  );
}