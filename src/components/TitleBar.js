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
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';


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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar elevation={0} color='primary' component="nav"  position='absolute'>
        <Toolbar>
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
              maxWidth: '70px',
              height: 'auto',
            }}
            src={logo}
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

          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {Object.entries(navItems).map(([key, value]) => (
              <Button style={{ width: 120, height: 50, fontSize:20 }} href={value.href} key={value.title} color='secondary'>
                    {value.title}
                </Button>
            ))}
            <IconButton color='secondary' href='https://www.instagram.com/bradleyschwarz/'><InstagramIcon></InstagramIcon></IconButton>
          </Box>
          
        </Toolbar>
      </AppBar>
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