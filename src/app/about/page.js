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

export default function About() {
  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
  }));

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 12,
        }}
      >
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Item elevation={0}>
              <Box>
                <Card variant="outlined">asd</Card>
              </Box>
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
                <Typography variant="body" component="h2">
                  anoiasd oaisnd oaisnd oaisnd oaisd oains doians doians doians doians doiansd oians d
                </Typography>
              </Box>
            </Item>
          </Grid>     
        </Grid>
      </Box>
    </Container>
  );
}