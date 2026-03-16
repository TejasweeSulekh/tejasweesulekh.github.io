import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  const navItems = ['Home', 'Experience', 'Projects', 'Achievements', 'Skills', 'Contact'];

  return (
    <AppBar position="sticky" component="header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tejaswee Sulekh
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} color="inherit" href={`#${item.toLowerCase()}`}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
