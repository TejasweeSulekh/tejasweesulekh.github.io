import React from 'react';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import FadeInView from './FadeInView';
import { experiences } from '../data/portfolioData';
import { motion } from 'framer-motion';


const Experience = () => {
  return (
    <Container component="section" id="experience" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Work Experience
      </Typography>
      {experiences.map((exp, index) => (
        <FadeInView key={index} delay={index * 0.2}>
          <Card sx={{
            mb: 4,
            border: '1px solid transparent',
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
              borderColor: '#90caf9',
              boxShadow: '0 8px 30px 0 rgba(144, 202, 249, 0.4)',
            }
          }}>
            <CardContent>
              <Typography variant="h5" component="h3" color="primary.main">
                {exp.role}
              </Typography>
              <Typography variant="subtitle1" component="p" color="text.secondary">
                {exp.company}
              </Typography>
              <Typography variant="subtitle2" component="p" color="text.secondary" gutterBottom>
                {exp.period}
              </Typography>
              <List dense>
                {exp.points.map((point, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </FadeInView>
      ))}
    </Container>
  );
};

export default Experience;
