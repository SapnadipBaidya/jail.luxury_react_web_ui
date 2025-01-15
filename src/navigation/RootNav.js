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
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import Person4Icon from "@mui/icons-material/Person4";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ThemeChangeSwitch from "./ThemeChangeSwitch";
import { navigationConfig } from "./navigationConfig";
import homePageLogo from "../assets/images/webp/homePageLogo.webp";
import GenericPopup from "../components/popups/GenericPopup";
import StyledIcon from "../components/wrappers/StyledIcon";
import ProfilePopupComponent from "../components/popups/ProfilePopupComponent";
import * as Pages from "../pages/index";
import { useAuth } from "../contexts/AuthProvider";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "../store/actions/categoryActions";

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
  marginLeft: theme.spacing(2),
}));

const DrawerContainer = styled(Box)({
  width: 250,
});

const renderRoutes = (routes) =>
  routes.map(({ path, component, children }) => (
    <Route
      key={path}
      path={path}
      element={React.createElement(Pages[component])}
    >
      {children && renderRoutes(children)}
    </Route>
  ));

const RootNav = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <Router>
      <StyledAppBar position="sticky">
        <StyledToolbar>
          {isTablet && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Link to={"/"}>
            <Logo src={homePageLogo} alt="Home Page Logo" />
          </Link>

          <SearchContainer>
            <SearchIcon />
            <InputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
          </SearchContainer>

          {!isTablet && (
            <NavLinksContainer>
              {navigationConfig
                .filter((item) => item.render)
                .map(({ path, label }) => (
                  <Typography
                    key={path}
                    variant="body1"
                    component={Link}
                    to={path}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {label}
                  </Typography>
                ))}
            </NavLinksContainer>
          )}

          <Box display="flex" alignItems="center" gap={1}>
            {isTablet ? (
              <StyledIcon icon={Person4Icon} />
            ) : (
              <GenericPopup
                popupName={user ? user.name : "Profile"}
                content={<ProfilePopupComponent />}
              />
            )}
            <ThemeChangeSwitch />
          </Box>
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
            {navigationConfig.map(({ path, label }) => (
              <ListItem button key={path} component={Link} to={path}>
                <ListItemText primary={label} />
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