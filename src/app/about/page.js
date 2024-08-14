'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import projects from '@/components/Projects';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import theme from '@/theme';
import portrait from "../../../public/images/profile_image.jpg"
import Image from 'next/image'

export default function About() {
  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
  }));

  return (
    <Container maxWidth="lg">
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
                src={portrait}
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
                <Typography variant="h4" component="h2">
                  Bradley Schwarz is a artist metalsmith based in Durham North Carolina. 
                </Typography>
                <Typography variant="body" component="">
                  After a bout with the possibility of graduate school, my spouse and I embarked on a several year journey of restoring a severely neglected home. I found a beauty in the simplicity of antique hand tools during this process. This discovery led me to the unmatched quality of antique cast iron machinery. After that, in order to supplement woodworking by making tools, I decided to dabble with forging. In a relatively short time I became obsessed. The combination of history, sculpture and practicality was exactly what I had been searching for in a medium.  
                  </Typography>
                  <Typography variant="body" component="">
                  Before modern machine manufacturing, all work was done by hand with skill that was the result of years of practice and dedication. This is the mentality I strive to bring to my work. In addition to skill, craft and art were deeply interwoven. I love pondering the provocative imagery of the medieval craftsman and exploring similar symbols and designs that were both sacred and customary. I aim to reach the point where work is synonymous to play, and the inner and outer worlds are joined seamlessly together through hand skill.
                </Typography>
              </Box>
            </Item>
          </Grid>     
        </Grid>
      </Box>
    </Container>
  );
}