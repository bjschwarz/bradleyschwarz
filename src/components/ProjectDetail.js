'use client'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Carousel from '@/components/Carousel.js';
import Box from '@mui/material/Box';
import theme from '@/theme';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ isDialogOpened, handleCloseDialog, project }) {
    useEffect(() => {
        handleClickOpen();
      }, []);

  const handleClickOpen = () => {
    //setOpen(true);
  };

  const handleClose = () => {
    //setOpen(false);
    handleCloseDialog(false);
  };

  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
  }));

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={isDialogOpened}
        onClose={handleClose}
        
      >
        <Box sx={{backgroundColor: theme.palette.background.default, width: '100%',}}>
        <AppBar elevation={0} sx={{ position: 'relative', }}>
          <Toolbar elevation={0}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h5" sx={{ ml: 2 }}>
            {project.title}
            </Typography>
          </Toolbar>
        </AppBar>
        
          <Grid sx={{width:'100%'}} marginTop={2} container spacing={8}>
            <Grid xs={12} md={7}>
              <Item elevation={0}>
                <Carousel project={project}></Carousel>
              </Item>
            </Grid>
            <Grid xs={12} md={5}>
              <Item elevation={0}>
                <Typography variant="h3" sx={{ ml: 2, mb:2 }}>
                {project.title}
                </Typography>

                <Typography variant="h5" sx={{ ml: 2, mb:2, fontWeight: 700 }}>
                {project.medium}
                </Typography>

                <Typography variant="h5" sx={{ ml: 2 }}>
                {project.description}
                </Typography>
              </Item>
            </Grid>
          </Grid>
          </Box>
      </Dialog>
    </React.Fragment>
  );
}