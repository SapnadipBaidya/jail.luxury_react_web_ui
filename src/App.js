import React from 'react';
import { Button, CssBaseline, Typography } from '@mui/material';
import RootNav from './navigation/RootNav';
import { ThemeProviderWrapper } from './contexts/themeContext';
function App() {
  return (
    <ThemeProviderWrapper>
     
      <CssBaseline />
     <RootNav/>
    </ThemeProviderWrapper>
  );
}

export default App;