import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

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
                backdropFilter: 'blur(12px)',
                border: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: mode === 'dark' 
                    ? `0 30px 60px -15px rgba(0,0,0,0.7), 0 0 20px -5px ${ACTIVE_SCHEME[mode].primary}33` 
                    : `0 30px 60px -15px rgba(0,0,0,0.15), 0 0 15px -5px ${ACTIVE_SCHEME[mode].primary}22`,
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
