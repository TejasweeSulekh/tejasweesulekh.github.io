import React from 'react';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "AI R&D Engineer",
    company: "IPHIPI, Hyderabad",
    period: "July 2025 - Present",
    points: [
      "Engineered custom asymmetric and multi-resolution loss functions to penalize false positives in low-SNR environments, improving speech quality metric by 10% and noise reduction quality by 13% compared to the baseline.",
      "Executed end-to-end Edge AI deployments from Python to bare-metal hardware via Data-path and Quantization-Aware Training (QAT), achieving 95% quantization retention and 30% higher speech quality compared to baseline.",
      "Architected a sub-150ms multi-threaded python inference engine, utilizing a thread-safe producer-consumer queues with 0% deadlock and active health monitoring dashboard for overflow and underflow detection.",
      "Optimized neural network bottlenecks by replacing standard GRUs with Dilated Convolutional Networks, achieving 1:1 speech power transparency retention and improving temporal context.",
      "Abstracted data buffering and pre-processing pipelines, decoupling ML architectures from low-level hardware constraints to enable rapid model retraining across diverse Bluetooth chipsets compatibility with the product.",
      "Prototyped an ultra-low latency (4ms) inference system, utilizing filter coefficients which were dynamically evolving for every 0.5ms (8 samples) driven by real-time neural network masks in a multi-data-path pipeline.",
      "Developed automated data augmentation pipelines, teaching the model to dynamically handle varying digital gain levels via magnitude independent loss function at natural logarithmic scale.",
      "Spearheaded technical integrations as the lead liaison between the client and silicon manufacturers, resolving OTA blockers and advancing solutions from technical POC to the commercial pricing stage."
    ]
  }
];

const Experience = () => {
  return (
    <Container component="section" id="experience" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Work Experience
      </Typography>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
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
              <Typography variant="h5" component="h3">
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
        </motion.div>
      ))}
    </Container>
  );
};

export default Experience;
