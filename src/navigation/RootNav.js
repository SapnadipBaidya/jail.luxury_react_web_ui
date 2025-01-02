import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import { navigationConfig } from './navigationConfig';
import * as Pages from '../pages/index';
import ThemeChangeSwitch from './ThemeChangeSwitch';

const renderRoutes = (routes) =>
  routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={React.createElement(Pages[route.component])}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));

  const RootNav = () => (
    <Router>
      <Navigation />
      <ThemeChangeSwitch/>
      <Routes>{renderRoutes(navigationConfig)}</Routes>
     
    </Router>
  );
  
  export default RootNav;