import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../globalStyles/theme';

const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  // Get current system time
  const currentHour = new Date().getHours();

  // Set initial theme based on system time (Dark mode from 6 PM to 6 AM)
  const defaultTheme = currentHour >= 18 || currentHour < 6 ? 'dark' : 'light';

  const [themeMode, setThemeMode] = useState(defaultTheme);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Dynamically switch themes
  const theme = useMemo(() => (themeMode === 'light' ? lightTheme : darkTheme), [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
