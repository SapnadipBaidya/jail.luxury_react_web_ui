import React from 'react';
import { Button, CssBaseline, Typography } from '@mui/material';
import { BrowserRouter as Router } from "react-router-dom";
import RootNav from './navigation/RootNav.jsx';
import { ThemeProviderWrapper } from './contexts/themeContext.jsx';
function App() {
  return (
    <ThemeProviderWrapper>
     
      <CssBaseline />
      <Router>
      <RootNav />
    </Router>
    </ThemeProviderWrapper>
  );
}

export default App;