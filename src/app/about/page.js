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
                  I am inspired by the elegant work of antiquity. Before modern machine manufacturing, blacksmiths forged their works using skills earned from years of practice and dedication to the craft. With nothing more than simple hand tools, which they also made themselves, these early smiths created some of the world's most awe-inspiring ironwork. This mentality, to achieve perfection with nothing but one's own hands, is what I strive to bring to my work. 
                </Typography>
                <Typography variant="body" component="">

                  I could never have come as far as I have without the generosity of several mentors. Jerry Darnell taught me many of the fundamentals of blacksmithing. How to work quickly and efficiently, correct fire control, and forge welding. His patience and knowledge laid a foundation for me to build onto. Peter Ross instilled in me a critical eye for detail, striving to have clean forgings, and to theorize and consider the processes used by period smiths. I have also been inspired by the work of Tom Latané who places artistry and elegant design at the top of his priorities. 
                </Typography>
                <Typography variant="body" component="">

                  I prefer to work with antique tools and belt-driven machinery. I use a 1912 German Söding Halbach anvil and a 1905 Buffalo Coal Forge. I enjoy the satisfaction of making my own tools when needed and restoring antique machines in disrepair. I plan to run my workshop from a line shaft belt system in the future.
                </Typography>
                <Typography variant="body" component="">
                  Currently I am focused on exploring the intersection between modern practically useful Items and early medieval designs. I am working on developing the processes used by early smiths to forge botanical and animal motifs, then incorporating them into my own designs.

                </Typography>
                 
              </Box>
            </Item>
          </Grid>     
        </Grid>
      </Box>
    </Container>
  );
}