import React from 'react';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const mainProjects = [
  {
    title: "Explainable Fraud Detection System",
    subtitle: "Self Project",
    points: [
      "Built an automated MLflow MLOps pipeline, training a 99.96% accuracy XGBoost classifier for imbalanced datasets.",
      "Created a Kubernetes microservices architecture to process Kafka event streams for real-time inference within 15ms.",
      "Engineered a ReAct agentic AI workflow via LangGraph, with automated risk reports based on extracted SHAP values.",
      "Executed a RAG pipeline utilizing LLM embeddings, for historical similarity searches monitored on a live Streamlit."
    ]
  }
];

const academicProjects = [
  {
    title: "GPT from Scratch",
    description: "Engineered a 10M parameter decoder-only transformer from scratch in PyTorch, implementing multi-head self-attention and residual pathways to train a generative model on the Tiny Shakespeare dataset."
  },
  {
    title: "Hierarchical Object Detection",
    description: "Led a 6-member team to build a multi-label dental X-ray detector using wavelet compression, fine-tuned Co-DETR, and Efficient-Net with Focal loss, increasing accuracy from 72.7% to 78.9%."
  },
  {
    title: "Chest X-Ray Classifier",
    description: "Trained EfficientNet and ResNet models on a 100k+ image dataset for 14-class disease classification, utilizing Haar wavelets for denoising and decentralized Federated Learning for client-server training."
  },
  {
    title: "Algorithmic Trading Predictor",
    description: "Developed a customizable LSTM network utilizing OHLCV time-series data to forecast short-term stock prices, integrating a simulated trading module for automated long/short strategy execution."
  },
  {
    title: "Computer Vision Fundamentals",
    description: "Applied Wavelet transforms, SIFT, and Wiener filtering for image restoration and feature extraction, benchmarking traditional CV algorithms against a custom CNN using OpenCV."
  }
];

const Projects = () => {
  return (
    <Container component="section" id="projects" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Projects
      </Typography>

      {mainProjects.map((project, index) => (
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
              transform: 'scale(1.01)',
              borderColor: '#90caf9',
              boxShadow: '0 8px 30px 0 rgba(144, 202, 249, 0.4)',
            }
          }}>
            <CardContent>
              <Typography variant="h5" component="h3">
                {project.title}
              </Typography>
              <Typography variant="subtitle1" component="p" color="text.secondary" gutterBottom>
                {project.subtitle}
              </Typography>
              <List dense>
                {project.points.map((point, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      <Typography variant="h5" component="h3" gutterBottom align="center" sx={{mt: 4}}>
        Academic & Course Projects
      </Typography>
      <Grid container spacing={4}>
        {academicProjects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              style={{ height: '100%' }}
            >
              <Card sx={{
                height: '100%',
                border: '1px solid transparent',
                boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
                '&:hover': {
                  borderColor: '#90caf9',
                  boxShadow: '0 8px 30px 0 rgba(144, 202, 249, 0.4)',
                }
              }}>
                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
