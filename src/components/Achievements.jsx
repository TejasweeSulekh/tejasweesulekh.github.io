import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LandscapeIcon from '@mui/icons-material/Landscape';
import GroupIcon from '@mui/icons-material/Group';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData'; 

const iconMap = {
  "School": <SchoolIcon />,
  "Money": <AttachMoneyIcon />,
  "Landscape": <LandscapeIcon />,
  "Group": <GroupIcon />
};

const Achievements = () => {
  return (
    <Container component="section" id="achievements" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Achievements & Extra-Curriculars
      </Typography>
      <List sx={{ maxWidth: 800, mx: 'auto' }}>
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <ListItem>
              <ListItemIcon sx={{ color: 'primary.main', minWidth: '45px' }}>
                {iconMap[item.iconType]} 
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Container>
  );
};

export default Achievements;