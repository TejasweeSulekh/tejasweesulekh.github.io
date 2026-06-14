import React from 'react';
import { Typography } from '@mui/material';
import { mainProjects, academicProjects } from '../data/portfolioData';
import Section from './Section';
import InfoCard from './InfoCard';
import FadeInView from './FadeInView';

const Projects = () => {
  return (
    <Section title="Projects" id="projects">
      {/* MAIN PROJECTS LIST */}
      {mainProjects.map((project, index) => (
        <InfoCard
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          points={project.points}
          links={{ github: project.githubLink, live: project.liveLink }}
          delay={(index + 1) * 0.2}
        />
      ))}

      <FadeInView delay={(mainProjects.length + 1) * 0.2}>
        <Typography variant="h5" component="h3" gutterBottom align="center" sx={{ mt: 6, mb: 4 }}>
          Academic & Course Projects
        </Typography>
      </FadeInView>
      
      {/* ACADEMIC PROJECTS LIST */}
      {academicProjects.map((project, index) => (
        <InfoCard
          key={`academic-${index}`}
          title={project.title}
          points={project.points}
          links={{ github: project.githubLink, live: project.liveLink }}
          delay={(index + mainProjects.length + 2) * 0.2}
        />
      ))}
    </Section>
  );
};

export default Projects;
