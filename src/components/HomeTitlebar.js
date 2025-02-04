'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import logo from "../../public/logo.png"
import logoInverted from "../../public/logo_inverted.png"
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './HomeTitlebar.module.css';

const drawerWidth = 240;

const navItems = {
  home: {title: "Home", href : "/"},
  gallery: {title: "Gallery", href : "/gallery"},
  drawings: {title: "Concepts", href : "/drawings"},
  about: {title: "About", href : "/about"},
  contact: {title: "Contact", href : "/contact"},
}

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <div sx={{ my: 4, ml: 2, }}>
        <Image
          style={{
            width: '100%',
            maxWidth: '100px',
            height: 'auto',
          }}
          src={logo}
          alt='logo'
          loading="lazy"
        />
        <Typography variant="h6" >
          Bradley Schwarz Studio
        </Typography>
      </div>
      <Divider />
      <List>
        {Object.entries(navItems).map(([key, value]) => (
          <ListItem key={value.title} disablePadding>
            <ListItemButton href={value.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={value.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <IconButton href='https://www.instagram.com/bradleyschwarz/'><InstagramIcon></InstagramIcon></IconButton>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />

        <Box sx={{  justifyContent: 'center', alignItems: 'center', zIndex: '2', backgroundColor: '#111'}}>
            <div className={styles.container}>
            <video playsInline width="100%" height="auto" autoPlay loop muted>
                <source src="/header.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.top_left}>
                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Image
                    style={{
                    width: '100%',
                    maxWidth: '80px',
                    height: 'auto',
                    }}
                    src={logoInverted}
                    alt='logo'
                    loading="lazy"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                />
                <Typography
                    component="div"
                    sx={{ ml:2, fontSize: '30px', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Bradley Schwarz Studio
                </Typography>
            </Box>
            </div>
            <div className={styles.top_right}>
            
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {Object.entries(navItems).map(([key, value]) => (
                    <Button style={{ width: 120, height: 50, fontSize:20 }} href={value.href} key={value.title} color='primary'>
                    {value.title}
                </Button>
                ))}
                <IconButton color='primary' href='https://www.instagram.com/bradleyschwarz/'><InstagramIcon></InstagramIcon></IconButton>
            </Box>
            </div>
            <div className={styles.centered} >
            <Typography sx={{
                display: { xs: 'none', sm: 'block' }, textTransform: 'uppercase', maxWidth: '600px'}} color="primary" variant="h6">
            <i>Hardware • Lighting • Art • Fireplace • Architectural • Reproduction • Restoration</i>
            </Typography>
            </div>
        </div>
        </Box>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}