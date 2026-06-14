import React from 'react';
import { Container, Typography } from '@mui/material';
import FadeInView from './FadeInView';
import { useCustomTheme } from '../theme';

const Section = ({ id, title, children, delay = 0 }) => {
  const { retroMode } = useCustomTheme();
  return (
    <Container component="section" id={id} data-track-visibility="true" sx={{ py: 8 }}>
      <FadeInView delay={delay}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{ fontFamily: retroMode ? '"VT323", monospace' : 'inherit' }}
        >
          {title}
        </Typography>
      </FadeInView>
      {children}
    </Container>
  );
};

export default Section;
