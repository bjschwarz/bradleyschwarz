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
import TitleBar from '@/components/TitleBar';


export default function About() {
  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
  }));

  return (
    <Container sx={{paddingTop: '64px'}} maxWidth="lg">
      <TitleBar></TitleBar>
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
                <Typography variant="body" component="">
                I am a blacksmith based in North Carolina, creating hand-forged ironwork. My craft is rooted in traditional methods carefully stewarded by expert smiths over thousands of years. Guided by the ancient principles of proportion, balance, and the unity of ornament and structure, my designs derive inspiration from a time when every element of a building was touched by a craftsman’s hand and shaped how its inhabitants experienced a space.                </Typography>
                <Typography variant="body" component="">

                In medieval architecture, ironwork marked moments of transition. Opening a gate, grasping a handle, or passing through a doorway became a deliberate, tactile experience. The weight, texture, and movement of the iron gave presence to ordinary actions, turning them into gestures of meaning.I bring that same sense of presence into contemporary spaces. Every project begins with a careful reading of the architecture it will inhabit—its materials, lines, and rhythm. The ironwork is designed to feel inseparable from the building, as if it has always belonged there.                </Typography>
                <Typography variant="body" component="">

                Each piece is forged by hand using heat, hammer, and anvil. This results in subtle variations of surface and form that grounds a space in a way machine-made objects cannot These marks hold the memory of human force and intention, giving the work a quiet vitality.In a world increasingly defined by speed and disposability, I believe there remains tremendous value in continuing this lineage of creating objects slowly, deliberately, and with the ultimate goal of enduring for generations.
                </Typography>
                 
              </Box>
            </Item>
          </Grid>     
        </Grid>
      </Box>
    </Container>
  );
}