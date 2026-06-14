import React from 'react';
import { Box } from '@mui/material';
import { useCustomTheme } from '../theme';

const PixelDivider = () => {
  const { retroMode } = useCustomTheme();
  
  if (!retroMode) return null;

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      my: 8, 
      color: 'primary.main',
      opacity: 0.8 
    }}>
      {/* A classic 8-bit space invader sprite */}
      <Box sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        '& svg': {
          width: 44,
          height: 32,
          fill: 'currentColor',
          filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.5))'
        }
      }}>
        <svg viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 0H3V1H2V0ZM8 0H9V1H8V0ZM3 1H4V2H3V1ZM7 1H8V2H7V1ZM2 2H9V3H2V2ZM0 3H2V4H0V3ZM3 3H5V4H3V3ZM6 3H8V4H6V3ZM9 3H11V4H9V3ZM0 4H11V5H0V4ZM0 5H1V6H0V5ZM2 5H3V6H2V5ZM8 5H9V6H8V5ZM10 5H11V6H10V5ZM3 6H5V7H3V6ZM6 6H8V7H6V6Z"/>
        </svg>
        <svg viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg" style={{ color: '#ff4971' }}>
          <path d="M2 0H3V1H2V0ZM8 0H9V1H8V0ZM3 1H4V2H3V1ZM7 1H8V2H7V1ZM2 2H9V3H2V2ZM0 3H2V4H0V3ZM3 3H5V4H3V3ZM6 3H8V4H6V3ZM9 3H11V4H9V3ZM0 4H11V5H0V4ZM0 5H1V6H0V5ZM2 5H3V6H2V5ZM8 5H9V6H8V5ZM10 5H11V6H10V5ZM3 6H5V7H3V6ZM6 6H8V7H6V6Z"/>
        </svg>
        <svg viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 0H3V1H2V0ZM8 0H9V1H8V0ZM3 1H4V2H3V1ZM7 1H8V2H7V1ZM2 2H9V3H2V2ZM0 3H2V4H0V3ZM3 3H5V4H3V3ZM6 3H8V4H6V3ZM9 3H11V4H9V3ZM0 4H11V5H0V4ZM0 5H1V6H0V5ZM2 5H3V6H2V5ZM8 5H9V6H8V5ZM10 5H11V6H10V5ZM3 6H5V7H3V6ZM6 6H8V7H6V6Z"/>
        </svg>
      </Box>
    </Box>
  );
};

export default PixelDivider;
