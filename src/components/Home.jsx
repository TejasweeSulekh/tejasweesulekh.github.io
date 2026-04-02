import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';
import hero from '../assets/hero.webp';
import { heroData } from '../data/portfolioData';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % heroData.toRotate.length;
    let fullText = heroData.toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(150);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container component="section" id="home" sx={{ textAlign: 'center', py: 8 }}>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        
        {/* The Clean Avatar */}
        <motion.div variants={itemVariants}>
          <Avatar
            alt="Tejaswee Sulekh"
            src={hero}
            sx={{
              width: 200,
              height: 200,
              margin: '0 auto',
              border: (theme) => `2px solid ${theme.palette.primary.main}`,
              boxShadow: '0 4px 20px 0 rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.02)' }
            }}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
            {`Hi, I'm Tejaswee Sulekh`}
          </Typography>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Typography variant="h5" component="h2" sx={{ mt: 1, minHeight: '3rem' }}>
            <span className="wrap">{text}</span>
          </Typography>
        </motion.div>

      </motion.div>
    </Container>
  );
};

export default Home;