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
    <Container component="section" id="skills" data-track-visibility="true" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Skills
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {Object.entries(skills).map(([category, list], index) => (
          <Grid item key={category} xs={12} sm={6} md={4}>
            <FadeInView delay={index * 0.2}>
              <Card sx={{ height: '100%' }}>
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
