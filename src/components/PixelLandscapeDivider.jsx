import React, { useRef } from 'react';
import { Box, useTheme } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCustomTheme } from '../theme';

const PixelLandscapeDivider = ({ variant = 1 }) => {
  const { retroMode } = useCustomTheme();
  const theme = useTheme();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const mountainX = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  if (!retroMode) return null;

  const gridColor = theme.palette.primary.main;
  const sunColor = theme.palette.secondary.main;
  
  // Using primary main instead of text primary makes it look crisp, modern, and sleek in Light Mode
  // while keeping the glowing neon aesthetic in Dark Mode
  const silhouetteColor = theme.palette.primary.main.replace('#', '%23');
  const bgColor = theme.palette.background.default;

  let rawSvg = '';
  let sunElement = null;

  switch(variant) {
    case 1: // Mountains & Sun
      rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100" viewBox="0 0 400 100"><path fill="${silhouetteColor}" d="M0 100V50h20V30h20V10h20v20h20v30h20v10h20V60h20V40h20V20h20v20h20v40h20v10h20V70h20V50h20V30h20v20h20v30h20v10h20v10z"/></svg>`;
      sunElement = (
        <Box sx={{
          position: 'absolute', bottom: '30%', width: '120px', height: '60px', 
          backgroundColor: sunColor, borderTopLeftRadius: '120px', borderTopRightRadius: '120px',
          opacity: 0.9, zIndex: 1, boxShadow: `0 0 30px ${sunColor}`
        }} />
      );
      break;
    case 2: // Cyber City & Moon
      rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100" viewBox="0 0 400 100"><path fill="${silhouetteColor}" d="M0 100V60h20V40h20V20h30v30h20V10h40v40h20V30h30v30h20V20h30v40h30V50h20v20h20V40h30v30h20v30z"/></svg>`;
      sunElement = (
        <Box sx={{
          position: 'absolute', bottom: '40%', width: '80px', height: '80px', right: '30%',
          borderRadius: '50%', boxShadow: `inset -15px -15px 0 0 ${sunColor}, 0 0 20px ${sunColor}44`,
          opacity: 0.9, zIndex: 1
        }} />
      );
      break;
    case 3: // Pyramids & Twin Suns
      rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100" viewBox="0 0 400 100"><path fill="${silhouetteColor}" d="M0 100V80h10V70h10V60h10V50h10V40h30v10h10v10h10v10h10v10h40V70h10V60h10V50h30v10h10v10h10v10h60V80h10V70h20v10h10v20h40z"/></svg>`;
      sunElement = (
        <>
          <Box sx={{
            position: 'absolute', bottom: '35%', width: '60px', height: '60px', left: '30%',
            backgroundColor: sunColor, borderRadius: '50%', opacity: 0.8, zIndex: 1, boxShadow: `0 0 20px ${sunColor}`
          }} />
          <Box sx={{
            position: 'absolute', bottom: '45%', width: '30px', height: '30px', left: '40%',
            backgroundColor: sunColor, borderRadius: '50%', opacity: 0.5, zIndex: 1, boxShadow: `0 0 10px ${sunColor}`
          }} />
        </>
      );
      break;
    case 4: // Digital Forest & Eclipse
    default:
      rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100" viewBox="0 0 400 100"><path fill="${silhouetteColor}" d="M0 100V80h10V70h10V60h-10V50h10V40h-10V30h20v10h-10v10h10v10h-10v10h10v10h30V70h10V60h-10V50h10V40h-10V30h20v10h-10v10h10v10h-10v10h10v10h50V80h10V70h10V60h-10V50h10V40h-10V30h20v10h-10v10h10v10h-10v10h10v10h40V90h10v10z"/></svg>`;
      sunElement = (
        <Box sx={{
          position: 'absolute', bottom: '35%', width: '100px', height: '100px', 
          borderRadius: '50%', backgroundColor: bgColor,
          boxShadow: `0 0 0 4px ${sunColor}, 0 0 30px ${sunColor}`,
          opacity: 0.9, zIndex: 1
        }} />
      );
      break;
  }

  const silhouetteSvg = `data:image/svg+xml,${encodeURIComponent(rawSvg)}`;

  return (
    <Box 
      ref={containerRef}
      sx={{ 
        position: 'relative', width: '100%', height: { xs: '200px', md: '300px' }, my: 8, overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center', perspective: '800px', backgroundColor: bgColor,
      }}
    >
      {sunElement}

      {/* The 8-Bit Silhouettes */}
      <Box 
        component={motion.div}
        style={{ x: mountainX }}
        sx={{
          position: 'absolute', bottom: '28%', left: '-10%', width: '120%', height: '80px',
          backgroundImage: `url("${silhouetteSvg}")`, backgroundRepeat: 'repeat-x', backgroundPosition: '0px 100%',
          backgroundSize: '300px 100%', opacity: 0.25, zIndex: 2, willChange: 'transform'
        }}
      />

      {/* The 3D CSS Perspective Grid */}
      <Box 
        component={motion.div}
        style={{ y: gridY }}
        sx={{
          position: 'absolute', bottom: '-30%', left: '-50%', width: '200%', height: '60%',
          backgroundImage: `linear-gradient(to top, ${gridColor} 2px, transparent 2px), linear-gradient(to right, ${gridColor} 2px, transparent 2px)`,
          backgroundSize: '40px 40px', transform: 'rotateX(70deg)', transformOrigin: 'top center',
          opacity: 0.25, zIndex: 3, willChange: 'transform'
        }}
      />

      {/* Overlay gradient to fade the edges seamlessly into the background */}
      <Box sx={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: `linear-gradient(to bottom, ${bgColor} 0%, transparent 40%, transparent 60%, ${bgColor} 100%)`,
        pointerEvents: 'none', zIndex: 4,
      }} />
    </Box>
  );
};

export default PixelLandscapeDivider;
