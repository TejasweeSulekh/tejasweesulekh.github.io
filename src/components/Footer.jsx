import React from 'react';
import { Container, Typography, Box, IconButton, Link } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <IconButton
            aria-label="GitHub"
            component={Link}
            href="https://github.com/Tejaswee-Sulekh"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <FaGithub />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            component={Link}
            href="https://www.linkedin.com/in/tejaswee-sulekh/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            aria-label="Email"
            component={Link}
            href="mailto:tejasweesulekh@gmail.com"
            color="inherit"
          >
            <FaEnvelope />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} Tejaswee Sulekh. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

