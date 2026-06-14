import React from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography, Box, IconButton, Tooltip } from '@mui/material';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import FadeInView from './FadeInView';
import { useCustomTheme } from '../theme';

const InfoCard = ({ title, subtitle, period, points, links, delay = 0 }) => {
  const { retroMode } = useCustomTheme();
  return (
    <FadeInView delay={delay}>
      <Card sx={{ mb: 4, position: 'relative' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Box>
              <Typography variant="h5" component="h3" color="primary.main">
                {title}
              </Typography>
              <Typography variant="subtitle1" component="p" color="text.secondary">
                {subtitle}
              </Typography>
              {period && (
                <Typography variant="subtitle2" component="p" color="text.secondary" gutterBottom>
                  {period}
                </Typography>
              )}
            </Box>
            
            {links && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {links.github && (
                  <Tooltip title="View Source Code" placement="top">
                    <IconButton 
                      size="small" 
                      component="a" 
                      href={links.github} 
                      target="_blank" 
                      data-umami-event={`Link: ${title} (GitHub)`}
                      sx={{ color: 'text.secondary', transition: '0.2s', '&:hover': { color: '#fff', transform: 'scale(1.1)' } }}
                    >
                      <FaGithub />
                    </IconButton>
                  </Tooltip>
                )}
                {links.live && (
                  <Tooltip title="Live Demo" placement="top">
                    <IconButton 
                      size="small" 
                      component="a" 
                      href={links.live} 
                      target="_blank" 
                      data-umami-event={`Link: ${title} (Live Demo)`}
                      sx={{ color: 'text.secondary', transition: '0.2s', '&:hover': { color: 'secondary.main', transform: 'scale(1.1)' } }}
                    >
                      <FaExternalLinkAlt />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
            )}
          </Box>

          {points && (
            <List dense sx={{ mt: 1, listStyleType: retroMode ? 'none' : 'disc', pl: retroMode ? 0 : 2 }}>
              {points.map((point, i) => (
                <ListItem key={i} sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                  <ListItemText 
                    primary={retroMode ? `> ${point}` : point} 
                    primaryTypographyProps={{ variant: 'body2', color: retroMode ? 'primary.main' : 'text.primary' }}
                    sx={{ m: 0 }} 
                  />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </FadeInView>
  );
};

export default InfoCard;
