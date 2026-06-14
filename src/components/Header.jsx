import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useTheme, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined';
import { useCustomTheme } from '../theme';

const Header = () => {
  const theme = useTheme();
  const themeController = useCustomTheme();
  const navItems = ['Home', 'Experience', 'Projects', 'Achievements', 'Skills', 'Contact'];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <AppBar position="fixed" component="header">
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

          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              ml: { xs: 1, md: 0 }, 
              fontWeight: 'bold', 
              color: 'primary.main',
              fontFamily: themeController.retroMode ? '"VT323", monospace' : 'inherit',
              fontSize: themeController.retroMode ? '1.5rem' : 'inherit',
              letterSpacing: themeController.retroMode ? '1px' : 'normal'
            }}
          >
            {themeController.retroMode ? 'Tejaswee Sulekh' : 'Tejaswee Sulekh'}
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            {navItems.map((item) => (
              <Button key={item} color="inherit" href={`#${item.toLowerCase()}`} sx={{ '&:hover': { color: 'primary.main' } }}>
                {item}
              </Button>
            ))}
          </Box>

          <Tooltip title="Toggle Retro Mode">
            <IconButton sx={{ ml: 1 }} onClick={themeController.toggleRetroMode} color="inherit">
              {themeController.retroMode ? <AutoAwesome /> : <AutoAwesomeOutlined />}
            </IconButton>
          </Tooltip>

          <Tooltip title="Toggle Dark/Light Mode">
            <IconButton sx={{ ml: 1 }} onClick={themeController.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>

          <Button
            variant="contained"
            color="primary"
            href="https://tejasweesulekh.github.io/blog/"
            target="_blank"
            size="small"
            startIcon={<CreateIcon />}
            data-umami-event="Header: Navigated to Blog"
            sx={{
              ml: 2,
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: (theme) => `0 0 15px ${theme.palette.primary.main}`,
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
