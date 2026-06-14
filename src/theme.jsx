import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// 1. RENAME THE CONTEXT AND HOOK
const CustomThemeContext = createContext({ 
  toggleColorMode: () => {},
  toggleRetroMode: () => {},
  retroMode: false,
});

export const useCustomTheme = () => useContext(CustomThemeContext);

const schemes = {
  slateMint: {
    dark: {
      primary: '#2dd4bf',
      secondary: '#5eead4',
      background: '#020617',
      paper: '#0f172a',
      text: '#f1f5f9',
    },
    light: {
      primary: '#0d9488',
      secondary: '#14b8a6',
      background: '#fcfaf7',
      paper: '#ffffff',
      text: '#042f2e',
    }
  },
  obsidianGold: {
    dark: {
      primary: '#fbbf24',
      secondary: '#f59e0b',
      background: '#0a0a0a',
      paper: '#141414',
      text: '#fffbeb',
    },
    light: {
      primary: '#92400e',
      secondary: '#b45309',
      background: '#fdf8ec',
      paper: '#ffffff',
      text: '#451a03',
    }
  }
};

const ACTIVE_SCHEME_NAME = 'slateMint'; 
const ACTIVE_SCHEME = schemes[ACTIVE_SCHEME_NAME];

// 2. RENAME THE PROVIDER
export const CustomThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState('dark');
  const [retroMode, setRetroMode] = useState(false); // 3. ADD NEW RETRO MODE STATE

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    const savedRetroMode = localStorage.getItem('retroMode') === 'true';
    
    if (savedMode) {
      setMode(savedMode);
    } else {
      setMode('dark');
    }
    setRetroMode(savedRetroMode);
  }, []);

  const themeController = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
      // 4. ADD RETRO MODE TOGGLE FUNCTION
      toggleRetroMode: () => {
        setRetroMode((prevRetro) => {
          const newRetro = !prevRetro;
          localStorage.setItem('retroMode', newRetro);
          return newRetro;
        });
      },
      retroMode, // Expose retroMode state
    }),
    [retroMode], // Add retroMode to dependency array
  );

  const theme = useMemo(
    () => {
      // 5. GET THE BASE THEME DEFINITION
      const baseTheme = {
        palette: {
          mode,
          primary: {
            main: ACTIVE_SCHEME[mode].primary,
            contrastText: mode === 'dark' ? '#000000' : '#ffffff',
          },
          secondary: {
            main: ACTIVE_SCHEME[mode].secondary,
            contrastText: mode === 'dark' ? '#000000' : '#ffffff',
          },
          background: {
            default: ACTIVE_SCHEME[mode].background,
            paper: ACTIVE_SCHEME[mode].paper,
          },
          text: {
            primary: ACTIVE_SCHEME[mode].text,
            secondary: mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
          },
        },
        typography: {
          fontFamily: '"Inter", "system-ui", "-apple-system", sans-serif',
        },
        shape: {
          borderRadius: 12,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: 'background-color 0.4s ease',
                backgroundImage: mode === 'dark' 
                  ? `radial-gradient(at 0% 0%, ${ACTIVE_SCHEME.dark.primary}10 0, transparent 50%), radial-gradient(at 100% 100%, ${ACTIVE_SCHEME.dark.secondary}10 0, transparent 50%)`
                  : `radial-gradient(at 0% 0%, ${ACTIVE_SCHEME.light.primary}05 0, transparent 50%), radial-gradient(at 100% 100%, ${ACTIVE_SCHEME.light.secondary}05 0, transparent 50%)`,
                backgroundAttachment: 'fixed',
              }
            }
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: `${ACTIVE_SCHEME[mode].background}ee`,
                backdropFilter: 'blur(16px)',
                boxShadow: 'none',
                color: ACTIVE_SCHEME[mode].text,
                borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 24,
                backgroundImage: 'none',
                backgroundColor: mode === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                boxShadow: mode === 'dark' 
                  ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
                  : 'inset 0 1px 0 0 rgba(255, 255, 255, 0.5), 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: mode === 'dark' 
                    ? `inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 20px 40px -10px rgba(0,0,0,0.7), 0 0 20px -5px ${ACTIVE_SCHEME[mode].primary}33` 
                    : `inset 0 1px 0 0 rgba(255, 255, 255, 0.5), 0 20px 40px -10px rgba(0,0,0,0.15), 0 0 15px -5px ${ACTIVE_SCHEME[mode].primary}22`,
                  borderColor: `${ACTIVE_SCHEME[mode].primary}99`,
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                padding: '10px 24px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: ACTIVE_SCHEME[mode].primary,
                },
              }
            }
          }
        },
      };

      // 6. IF RETRO MODE IS ON, AUGMENT THE THEME
      if (retroMode) {
        baseTheme.typography.h1 = { fontFamily: '"Sixtyfour", "VT323", monospace', textShadow: mode === 'dark' ? `0 0 8px ${ACTIVE_SCHEME[mode].primary}88` : `2px 2px 0px ${ACTIVE_SCHEME[mode].primary}88` };
        baseTheme.typography.h2 = { fontFamily: '"Sixtyfour", "VT323", monospace' };
        baseTheme.typography.h3 = { fontFamily: '"Sixtyfour", "VT323", monospace' };
        baseTheme.typography.h4 = { fontFamily: '"Sixtyfour", "VT323", monospace' };
        baseTheme.typography.h5 = { fontFamily: '"Sixtyfour", "VT323", monospace' };
        baseTheme.typography.h6 = { fontFamily: '"Sixtyfour", "VT323", monospace' };
        baseTheme.typography.subtitle1 = { fontFamily: '"VT323", monospace', fontSize: '1.2rem' };
        baseTheme.typography.subtitle2 = { fontFamily: '"VT323", monospace', fontSize: '1.1rem' };
        baseTheme.typography.body1 = { fontFamily: '"VT323", monospace', fontSize: '1.2rem' };
        baseTheme.typography.body2 = { fontFamily: '"VT323", monospace', fontSize: '1.1rem' };
        baseTheme.typography.button = { fontFamily: '"VT323", monospace', fontSize: '1.2rem', letterSpacing: '2px' };
        
        baseTheme.shape.borderRadius = 0; // Square corners for retro look
        
        baseTheme.components.MuiCssBaseline = {
          styleOverrides: {
            body: {
              ...baseTheme.components.MuiCssBaseline.styleOverrides.body,
              position: 'relative',
              overflowX: 'hidden',
              '&::after': {
                content: '""',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)',
                backgroundSize: '100% 4px',
                pointerEvents: 'none',
                zIndex: 9999,
              }
            }
          }
        };

        baseTheme.components.MuiCard.styleOverrides.root = {
          ...baseTheme.components.MuiCard.styleOverrides.root,
          borderRadius: 0,
          backdropFilter: 'none',
          boxShadow: mode === 'dark' ? '6px 6px 0px rgba(255,255,255,0.1)' : '6px 6px 0px rgba(0,0,0,0.8)',
          border: `2px solid ${mode === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'}`,
          backgroundColor: mode === 'dark' ? '#0a0a0a' : '#f5f5f5',
          '&:hover': {
            transform: 'translate(-2px, -2px)',
            boxShadow: `8px 8px 0px ${ACTIVE_SCHEME[mode].primary}`,
            borderColor: ACTIVE_SCHEME[mode].primary,
          }
        };

        baseTheme.components.MuiButton.styleOverrides.root = {
          ...baseTheme.components.MuiButton.styleOverrides.root,
          borderRadius: 0,
          border: `2px solid transparent`,
          '&:hover': {
            transform: 'translate(-2px, -2px)',
            border: `2px solid ${ACTIVE_SCHEME[mode].primary}`,
            boxShadow: `6px 6px 0px ${mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.8)'}`,
          },
        };
      }
      
      return createTheme(baseTheme);
    },
    [mode, retroMode], // Add retroMode to dependency array
  );

  return (
    <CustomThemeContext.Provider value={themeController}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
