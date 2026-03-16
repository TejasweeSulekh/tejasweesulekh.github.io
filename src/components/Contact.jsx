import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Container component="section" id="contact" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Contact Me
      </Typography>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <Box 
          component="form" 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '600px',
            mx: 'auto',
            p: 3,
            borderRadius: 2,
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)'
          }}
        >
          <TextField label="Your Name" variant="outlined" required />
          <TextField label="Your Email" variant="outlined" type="email" required />
          <TextField
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button variant="contained" type="submit" fullWidth>Send</Button>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;
