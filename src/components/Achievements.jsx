import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LandscapeIcon from '@mui/icons-material/Landscape';
import GroupIcon from '@mui/icons-material/Group';
import { motion } from 'framer-motion';

const achievements = [
  {
    icon: <SchoolIcon />,
    text: "Achieved AIR 305 in JEE Advanced among 0.15M aspirants and 97.70 percentile in JEE Main ['20]."
  },
  {
    icon: <AttachMoneyIcon />,
    text: "Completed the Summer of Quant programme under IIT Bombay's Quant community ['24]."
  },
  {
    icon: <LandscapeIcon />,
    text: "Summited Chang-La (17,586 ft.) and Khardung-La (18,380 ft.) passes in Ladakh ['23]."
  },
  {
    icon: <GroupIcon />,
    text: "Contributed to the Versova beach cleanup initiative organized by the Abhyuday community ['23]."
  }
];

const Achievements = () => {
  return (
    <Container component="section" id="achievements" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Achievements & Extra-Curriculars
      </Typography>
      <List>
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
              <ListItemIcon>
                {item.icon}
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
