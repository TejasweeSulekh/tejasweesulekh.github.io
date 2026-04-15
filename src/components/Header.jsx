import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create';

const Header = () => {
  const navItems = ['Home', 'Experience', 'Projects', 'Achievements', 'Skills', 'Contact'];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <AppBar position="fixed" component="header" sx={{ backdropFilter: 'blur(3px)', backgroundColor: 'rgba(13, 13, 13, 0.8)' }}>
        <Toolbar>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navItems.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu} component="a" href={`#${item.toLowerCase()}`}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: { xs: 1, md: 0 } }}>
            Tejaswee Sulekh
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            {navItems.map((item) => (
              <Button key={item} color="inherit" href={`#${item.toLowerCase()}`}>
                {item}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            color="secondary"
            href="https://tejasweesulekh.github.io/blog/"
            target="_blank"
            size="small"
            startIcon={<CreateIcon />}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: '0 4px 14px 0 rgba(244, 143, 177, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                backgroundColor: 'transparent',
                color: '#00e5ff',
                // Inset border creates an inner ring, standard shadow creates the outer glow
                boxShadow: 'inset 0 0 0 2px #00e5ff, 0 4px 20px 0 rgba(0, 229, 255, 0.4)',
              }
            }}
          >
            Blog
          </Button>
        </Toolbar>
      </AppBar>
      
      <Toolbar /> 
    </>
  );
};

export default Header;