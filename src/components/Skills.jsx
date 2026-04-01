import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';
import FadeInView from './FadeInView';

import { skills } from '../data/portfolioData';

const Skills = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Container component="section" id="skills" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Skills
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {Object.entries(skills).map(([category, list], index) => (
          <Grid item key={category} xs={12} sm={6} md={4}>
            <FadeInView delay={index * 0.2}>
              <Card sx={{
                height: '100%',
                border: '1px solid transparent',
                boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  borderColor: '#90caf9',
                  boxShadow: '0 8px 30px 0 rgba(144, 202, 249, 0.4)',
                }
              }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom align="center" color="primary.main">
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                    {list.map((skill) => (
                      <Chip key={skill} label={skill} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </FadeInView>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
