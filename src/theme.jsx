import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

/**
 * REFINED DESIGNER SCHEMES
 * Focus: High contrast for Dark Mode, Depth-rich Light Mode.
 */
const schemes = {
  // Option: SlateMint (Minted Light Mode)
  slateMint: {
    dark: {
      primary: '#2dd4bf',    // Vibrant Mint
      secondary: '#5eead4',
      background: '#020617', // Midnight Slate
      paper: '#0f172a',      // Slate-900
      text: '#f1f5f9',
    },
    light: {
      primary: '#0d9488',    // Dark Teal
      secondary: '#14b8a6',
      background: '#fcfaf7', // Back to the warmer Parchment White
      paper: '#ffffff',
      text: '#042f2e',       // Deep Teal-Black for contrast
    }
  },
  // Option: ObsidianGold (True Black Luxury)
  obsidianGold: {
    dark: {
      primary: '#fbbf24',    // Amber Gold
      secondary: '#f59e0b',
      background: '#0a0a0a', // True Obsidian Black
      paper: '#141414',      // Elevated surface
      text: '#fffbeb',
    },
    light: {
      primary: '#92400e',    // Deep Bronze-Gold
      secondary: '#b45309',
      background: '#fdf8ec', // Warm Champagne Cream
      paper: '#ffffff',
      text: '#451a03',       // Deep Brown-Black
    }
  }
};

const ACTIVE_SCHEME_NAME = 'slateMint'; 
const ACTIVE_SCHEME = schemes[ACTIVE_SCHEME_NAME];

export const ColorModeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      setMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: ACTIVE_SCHEME[mode].primary,
            contrastText: mode === 'dark' ? '#000' : '#fff',
          },
          secondary: {
            main: ACTIVE_SCHEME[mode].secondary,
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
          h1: { fontWeight: 800, letterSpacing: '-0.025em' },
          h2: { fontWeight: 700, letterSpacing: '-0.02em' },
          h3: { fontWeight: 700 },
          h4: { fontWeight: 600 },
          button: { textTransform: 'none', fontWeight: 600 },
        },
        shape: {
          borderRadius: 12,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: 'background-color 0.4s ease, color 0.4s ease',
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: ACTIVE_SCHEME[mode].background,
                },
                '&::-webkit-scrollbar-thumb': {
                  background: mode === 'dark' ? '#334155' : '#cbd5e1',
                  borderRadius: '10px',
                },
                // Re-adding the mesh gradient subtle depth
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
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: ACTIVE_SCHEME[mode].text,
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'rotate(15deg)',
                }
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 24,
                backgroundImage: 'none',
                // RESTORING previous opacity/background (not too transparent)
                backgroundColor: mode === 'dark' 
                  ? `${ACTIVE_SCHEME[mode].paper}` 
                  : '#ffffff',
                border: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)'}`,
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: mode === 'dark' 
                    ? `0 30px 60px -15px rgba(0,0,0,0.8), 0 0 20px -5px ${ACTIVE_SCHEME[mode].primary}44` 
                    : `0 30px 60px -15px rgba(0,0,0,0.1), 0 0 15px -5px ${ACTIVE_SCHEME[mode].primary}22`,
                  borderColor: `${ACTIVE_SCHEME[mode].primary}88`,
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
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
