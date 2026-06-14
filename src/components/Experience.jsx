import React from 'react';
import { experiences } from '../data/portfolioData';
import Section from './Section';
import InfoCard from './InfoCard';

const Experience = () => {
  return (
    <Section title="Work Experience" id="experience">
      {experiences.map((exp, index) => (
        <InfoCard
          key={index}
          title={exp.role}
          subtitle={exp.company}
          period={exp.period}
          points={exp.points}
          delay={(index + 1) * 0.2}
        />
      ))}
    </Section>
  );
};

export default Experience;
