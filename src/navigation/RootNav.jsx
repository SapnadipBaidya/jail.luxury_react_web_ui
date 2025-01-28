import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
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
  Menu,
  MenuItem,
  Card,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ThemeChangeSwitch from "./ThemeChangeSwitch";
import { navigationConfig } from "./navigationConfig";
import homePageLogoDark from "../assets/images/webp/homePageLogoDark.webp";
import homePageLogoLight from "../assets/images/webp/homePageLogoLight.webp";
import * as Pages from "../pages/index";
import { useAuth } from "../contexts/AuthProvider";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "../store/actions/categoryActions";
import Footer from "../pages/Footer";
import ProfileBtn from "../components/buttons/profileBtn";
import TruncatedText from "../components/wrappers/TruncatedText";

// ✅ Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-end",
});

const Logo = styled("img")({
  height: "40px",
  cursor: "pointer",
});

const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  paddingRight: "5vh",
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  paddingRight: "2vh",
}));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  color: theme.custom?.primaryButtonFontColor || theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.ascentColor.main,
  },
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
  const { user, logout } = useAuth();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [searchAnchor, setSearchAnchor] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const [profileBtnWidth, setProfileBtnWidth] = useState(null); // ✅ Store Profile Button Width

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
    setProfileBtnWidth(event.currentTarget.offsetWidth); // ✅ Get button width dynamically
  };
  const handleProfileMenuClose = () => setProfileMenuAnchor(null);

  const handleSearchClick = (event) => {
    setSearchAnchor(event.currentTarget);
  };
  const handleSearchClose = () => {
    setSearchAnchor(null);
  };

  return (
    <>
      <StyledAppBar position="sticky">
        <StyledToolbar>
          {isTablet && (
            <IconButtonWrapper
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButtonWrapper>
          )}
          {"make a drop down for catagory"}

          {"make a button"}
          {"make a drop down for catagory"}
          <Link to="/">
            <Logo
              src={
                theme.palette.mode === "light"
                  ? homePageLogoLight
                  : homePageLogoDark
              }
              alt="Home Page Logo"
            />
          </Link>

          <Box
            display="flex"
            flexDirection="row"
            minWidth="48%"
            justifyContent="flex-end"
            alignItems="center"
          >
            {/* Search Button */}
            <SearchContainer>
              <IconButtonWrapper color="inherit" onClick={handleSearchClick}>
                <SearchIcon />
              </IconButtonWrapper>

              {/* ✅ Centered MUI Dropdown for Search */}
              <Menu
                open={Boolean(searchAnchor)}
                onClose={handleSearchClose}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 65 }}
                PaperProps={{
                  sx: {
                    minWidth: "100vw",
                    maxWidth: "600px",
                    padding: 2,
                    marginTop: 0,
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: theme.shadows[5],
                    borderRadius: 2,
                    position: "fixed",
                  },
                }}
              >
                <MenuItem disableRipple>
                  <InputBase
                    fullWidth
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    inputProps={{ "aria-label": "search" }}
                    sx={{
                      flexGrow: 1,
                      fontSize: "1.2rem",
                      paddingLeft: "1rem",
                      outline: "none",
                    }}
                  />
                  <IconButton onClick={handleSearchClose}>
                    <CloseIcon />
                  </IconButton>
                </MenuItem>
              </Menu>
            </SearchContainer>

            {/* Navigation Links */}
            <NavLinksContainer>
              {navigationConfig
                .filter((item) => item.render)
                .map(({ path, label }) => (
                  <Typography
                    key={path}
                    variant="body1"
                    component={Link}
                    to={path}
                    sx={{ color: "inherit", textDecoration: "none" }}
                  >
                    {label}
                  </Typography>
                ))}
            </NavLinksContainer>

            {/* Profile & Theme Switch */}
            <ProfileBtn
              text={
                user?.id ? (
                  <TruncatedText maxWidth="9vw">{user?.name}</TruncatedText>
                ) : (
                  "Profile"
                )
              }
              executableFunction={handleProfileMenuOpen}
            />
            <ThemeChangeSwitch />
          </Box>

          {/* Profile Menu (Fixed Width Matching Profile Button) */}
          <Menu
            anchorEl={profileMenuAnchor}
            open={Boolean(profileMenuAnchor)}
            onClose={handleProfileMenuClose}
            PaperProps={{
              sx: {
                width: profileBtnWidth || "auto", // ✅ Dynamic width matching Profile Button
                minWidth: "auto",
                boxShadow: theme.shadows[5],
                borderRadius: 2,
              },
            }}
          >
            {!user?.id ? (
              <MenuItem
                onClick={() => {
                  handleProfileMenuClose();
                  navigate("/login-signup");
                }}
              >
                <Card sx={{ padding: "1vw" }}>
                  <h2>Welcome</h2>
                  <h6>
                    To access account and <br /> manage orders...
                  </h6>
                  Login / Signup
                </Card>
              </MenuItem>
            ) : (
              <>
                <MenuItem onClick={handleProfileMenuClose}>Orders</MenuItem>
                <MenuItem
                  onClick={(e) => {
                    handleProfileMenuClose(e);
                    navigate("usercontact");
                  }}
                >
                  profile
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    handleProfileMenuClose(e);
                    logout();
                  }}
                >
                  Logout
                </MenuItem>
              </>
            )}
          </Menu>
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
      <Footer />
    </>
  );
};

export default RootNav;
