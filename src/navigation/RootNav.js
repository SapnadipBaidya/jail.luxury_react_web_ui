import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
} from '@mui/material';
import Person4Icon from '@mui/icons-material/Person4';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import * as Pages from '../pages/index';
import ThemeChangeSwitch from './ThemeChangeSwitch';
import { navigationConfig } from './navigationConfig';
import { useTheme, styled } from '@mui/material/styles';
import homePageLogo from '../assets/images/webp/homePageLogo.webp'; 
import GenericPopup from '../components/popups/GenericPopup';
import StyledIcon from '../components/wrappers/StyledIcon';
import ProfilePopupComponent from '../components/popups/ProfilePopupComponent';

// Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Logo = styled('img')({
  height: '40px',
  cursor: 'pointer',
});

const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const NavLink = styled(Typography)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SettingsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection:"row",
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const DrawerContainer = styled(Box)({
  width: 250,
});

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginLeft: theme.spacing(2),
}));

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

const RootNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Router>
      <StyledAppBar position="sticky">
        <StyledToolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}



          <NavLink
                  key={"/"}
                  variant="body1"
                  component={Link}
                  to={"/"}
                >
                 <Logo src={homePageLogo} alt="Home Page Logo" />
                </NavLink>
          <SearchContainer>
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchContainer>

          {!isMobile && (
            <NavLinksContainer>
              {navigationConfig.map((item) => (
                <NavLink
                  key={item.path}
                  variant="body1"
                  component={Link}
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              ))}
            </NavLinksContainer>
          )}
          <SettingsContainer>
            {isMobile?<StyledIcon icon={Person4Icon}/>:<GenericPopup popupName={"Profile"} content={<ProfilePopupComponent/>}/>}
          
          <ThemeChangeSwitch />
          </SettingsContainer>
          
        </StyledToolbar>
      </StyledAppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerContainer
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navigationConfig.map((item) => (
              <ListItem
                button
                key={item.path}
                component={Link}
                to={item.path}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </DrawerContainer>
      </Drawer>

      <Routes>{renderRoutes(navigationConfig)}</Routes>
    </Router>
  );
};

export default RootNav;