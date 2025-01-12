import React from 'react';
import { Button, CssBaseline, Typography } from '@mui/material';
import RootNav from './navigation/RootNav';
import { ThemeProviderWrapper } from './contexts/themeContext';
import { useDispatch } from "react-redux";
import store from './store/store';
import { fetchAllCategories } from './store/actions/categoryActions';

function App() {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(fetchAllCategories());
  },[])
  return (
    <ThemeProviderWrapper>
     
      <CssBaseline />
     <RootNav/>
    </ThemeProviderWrapper>
  );
}

export default App;