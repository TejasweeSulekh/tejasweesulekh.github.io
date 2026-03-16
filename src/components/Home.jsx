import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import hero from '../assets/hero.png';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const toRotate = ["MLOps & Embedded Systems Engineer", "Architecting intelligent systems from silicon to scale."];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => {
      clearInterval(ticker);
    };
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
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
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container component="section" id="home" sx={{ textAlign: 'center', py: 8 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Avatar
            alt="Tejaswee Sulekh"
            src={hero}
            sx={{
              width: 200,
              height: 200,
              margin: '0 auto',
              border: (theme) => `2px solid ${theme.palette.primary.main}`,
              boxShadow: '0 4px 20px 0 rgba(0,0,0,0.2)'
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
