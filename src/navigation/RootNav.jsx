import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
  Paper,
  Menu,
  MenuItem
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import Person4Icon from "@mui/icons-material/Person4";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ThemeChangeSwitch from "./ThemeChangeSwitch";
import { navigationConfig } from "./navigationConfig";
import homePageLogo from "../assets/images/webp/homePageLogo.webp";
import StyledIcon from "../components/wrappers/StyledIcon";
import ProfilePopupComponent from "../components/popups/ProfilePopupComponent";
import * as Pages from "../pages/index";
import { useAuth } from "../contexts/AuthProvider";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "../store/actions/categoryActions";
import Footer from "../pages/Footer";

// Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Logo = styled("img")({
  height: "40px",
  cursor: "pointer",
});

const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  position: "relative",
}));

// Full-Width Dropdown Styles
const FullScreenSearch = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100vw",
  height: "10vh",
  backgroundColor: theme.palette.background.paper,
  zIndex: 1000,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: theme.shadows[5],
}));

const DrawerContainer = styled(Box)({
  width: 250,
});

const renderRoutes = (routes) =>
  routes.map(({ path, component, children }) => (
    <Route key={path} path={path} element={React.createElement(Pages[component])}>
      {children && renderRoutes(children)}
    </Route>
  ));

const RootNav = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const handleProfileMenuOpen = (event) => setProfileMenuAnchor(event.currentTarget);
  const handleProfileMenuClose = () => setProfileMenuAnchor(null);

  return (
    <Router>
      <StyledAppBar position="sticky">
        <StyledToolbar>
          {isTablet && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}

          <Link to={"/"}>
            <Logo src={homePageLogo} alt="Home Page Logo" />
          </Link>

          <SearchContainer>
            <IconButton color="inherit" onClick={() => setSearchBarOpen(true)}>
              <SearchIcon />
            </IconButton>

            {searchBarOpen && (
              <FullScreenSearch>
                <InputBase
                  fullWidth
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  inputProps={{ "aria-label": "search" }}
                  style={{
                    flexGrow: 1,
                    fontSize: "1.2rem",
                    paddingLeft: "1rem",
                  }}
                />
                <IconButton onClick={() => setSearchBarOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </FullScreenSearch>
            )}
          </SearchContainer>

          {!isTablet && (
            <NavLinksContainer>
              {navigationConfig
                .filter((item) => item.render)
                .map(({ path, label }) => (
                  <Typography key={path} variant="body1" component={Link} to={path} style={{ color: "inherit", textDecoration: "none" }}>
                    {label}
                  </Typography>
                ))}
            </NavLinksContainer>
          )}

          {/* Profile Dropdown using MUI Menu */}
          <Box display="flex" alignItems="center" gap={1}>
            <Menu
              anchorEl={profileMenuAnchor}
              open={Boolean(profileMenuAnchor)}
              onClose={handleProfileMenuClose}
            >
              <MenuItem onClick={handleProfileMenuClose}>My Account</MenuItem>
              <MenuItem onClick={handleProfileMenuClose}>Orders</MenuItem>
              <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
            </Menu>

            <ThemeChangeSwitch />
          </Box>
        </StyledToolbar>
      </StyledAppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerContainer role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {navigationConfig.map(({ path, label }) => (
              <ListItem button key={path} component={Link} to={path}>
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </DrawerContainer>
      </Drawer>

      <Routes>{renderRoutes(navigationConfig)}</Routes>
      <Footer />
    </Router>
  );
};

export default RootNav;
