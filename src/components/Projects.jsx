import React from 'react';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, Box, IconButton, Tooltip } from '@mui/material';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { mainProjects, academicProjects } from '../data/portfolioData';
import FadeInView from './FadeInView';

const Projects = () => {
  return (
    <Container component="section" id="projects" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Projects
      </Typography>

      {mainProjects.map((project, index) => (
        <FadeInView key={index} delay={index * 0.2}>
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
              {/* Header Row: Title on the left, Icons on the right */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Box>
                  <Typography variant="h5" component="h3" color="primary.main">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" component="p" color="text.secondary">
                    {project.subtitle}
                  </Typography>
                </Box>
                
                {/* Minimalist Icon Links */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {project.githubLink && (
                    <Tooltip title="View Source Code" placement="top">
                      <IconButton 
                        size="small" 
                        component="a" 
                        href={project.githubLink} 
                        target="_blank" 
                        sx={{ color: 'text.secondary', transition: '0.2s', '&:hover': { color: '#fff', transform: 'scale(1.1)' } }}
                      >
                        <FaGithub />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.liveLink && (
                    <Tooltip title="Live Demo" placement="top">
                      <IconButton 
                        size="small" 
                        component="a" 
                        href={project.liveLink} 
                        target="_blank" 
                        sx={{ color: 'text.secondary', transition: '0.2s', '&:hover': { color: 'secondary.main', transform: 'scale(1.1)' } }}
                      >
                        <FaExternalLinkAlt />
                      </IconButton>
                    </Tooltip>
                  )}
                </Box>
              </Box>

              <List dense sx={{ mt: 1 }}>
                {project.points.map((point, i) => (
                  <ListItem key={i} sx={{ px: 0 }}>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </FadeInView>
      ))}

      <Typography variant="h5" component="h3" gutterBottom align="center" sx={{mt: 4}}>
        Academic & Course Projects
      </Typography>
      
      <Grid container spacing={4}>
        {academicProjects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <FadeInView key={index} delay={index * 0.2}>
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
            </FadeInView>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;