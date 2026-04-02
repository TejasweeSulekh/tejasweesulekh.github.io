import React, { useState, useEffect, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { motion } from 'framer-motion';

const ParticlesComponent = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 2. The Smart Trigger Function
    const triggerParticles = () => setIsReady(true);

    if ('requestIdleCallback' in window) {
      // Native browser API: Fires exactly when the main thread is completely free
      requestIdleCallback(triggerParticles);
    } else {
      // Safe fallback for older browsers (like old versions of Safari)
      setTimeout(triggerParticles, 500);
    }
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    // Added explicit fullScreen controls to ensure it stays strictly in the background
    fullScreen: { enable: true, zIndex: -1 }, 
    background: {
      color: {
        value: '#0d0d0d',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 40,
          duration: 0.4,
          strength: 0.5,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
        limit: 120,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  // 3. Keep the CPU totally clear until the browser is idle
  if (!isReady) return null; 

  // 4. The Cinematic Fade
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
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
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </motion.div>
  );
};

export default ParticlesComponent;