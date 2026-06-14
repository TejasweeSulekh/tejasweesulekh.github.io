import React from 'react';
import { Container, Typography } from '@mui/material';
import FadeInView from './FadeInView';

const Section = ({ id, title, children, delay = 0 }) => {
  return (
    <Container component="section" id={id} data-track-visibility="true" sx={{ py: 8 }}>
      <FadeInView delay={delay}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {title}
        </Typography>
      </FadeInView>
      {children}
    </Container>
  );
};

export default Section;
