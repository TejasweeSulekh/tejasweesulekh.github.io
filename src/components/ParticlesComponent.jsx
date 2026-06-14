import React, { useState, useEffect, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material';
import { useCustomTheme } from '../theme';

const ParticlesComponent = () => {
  const theme = useTheme();
  const { retroMode } = useCustomTheme();
  const [isReady, setIsReady] = useState(false);
  const [particlesEngineLoaded, setParticlesEngineLoaded] = useState(false);

  useEffect(() => {
    // 2. The Smart Trigger Function
    const triggerParticles = () => setIsReady(true);

    if ('requestIdleCallback' in window) {
      // Native browser API: Fires exactly when the main thread is completely free
      requestIdleCallback(triggerParticles);
    } else {
      // Safe fallback for older browsers
      setTimeout(triggerParticles, 500);
    }
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // 3. Callback: Fires when the canvas is fully initialized and painted
  const particlesLoaded = useCallback(async (container) => {
    setParticlesEngineLoaded(true);
  }, []);

  const options = {
    // Explicit fullScreen controls to ensure it stays strictly in the background
    fullScreen: { enable: true, zIndex: -1 }, 
    background: {
      color: {
        value: theme.palette.background.default,
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        push: { quantity: 1 },
        repulse: { distance: 40, duration: 0.4, strength: 0.5 },
      },
    },
    particles: {
      color: { value: retroMode ? [theme.palette.primary.main, theme.palette.secondary.main, '#ffffff'] : theme.palette.text.secondary },
      links: {
        color: theme.palette.text.secondary,
        distance: 150,
        enable: !retroMode,
        opacity: theme.palette.mode === 'dark' ? 0.3 : 0.1,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: retroMode ? 'top' : 'none',
        enable: true,
        outModes: { default: 'out' },
        random: retroMode,
        speed: retroMode ? 0.5 : 0.8,
        straight: retroMode,
      },
      number: {
        density: { enable: true },
        value: retroMode ? 100 : 80,
        limit: retroMode ? 200 : 120,
      },
      opacity: { value: retroMode ? 0.8 : (theme.palette.mode === 'dark' ? 0.4 : 0.15) },
      shape: { type: retroMode ? 'square' : 'circle' },
      size: { value: retroMode ? { min: 2, max: 4 } : { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // Keep the CPU totally clear until the browser is idle
  if (!isReady) return null; 

  // 4. The Cinematic Fade (Now waits for the engine)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      // Wait for the particles to confirm they are loaded before fading to 1
      animate={{ opacity: particlesEngineLoaded ? 1 : 0 }}
      // A 0.5s delay to give the main thread a buffer between loading and fading
      transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
      style={{ 
        position: 'fixed',
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        willChange: "opacity" 
      }} 
    >
      <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} // Hook into the loaded event here
        options={options} 
      />
    </motion.div>
  );
};

export default ParticlesComponent;