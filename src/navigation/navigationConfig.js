import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DirectionsBoatFilledOutlinedIcon from '@mui/icons-material/DirectionsBoatFilledOutlined';
import Person4Icon from '@mui/icons-material/Person4';
import { styled } from '@mui/material/styles';

// Styled Icon Container for consistent theming
const StyledIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  color: theme.palette.secondary.main, // Use the primary color from the theme
  '&:hover': {
    color: theme.palette.primary.main, // Darker shade on hover
  },
  transition: 'color 0.3s ease',
}));

export const navigationConfig = [
  {
    label: "",
      path: '/',
      component: 'Home',
  },
  {
    label: (
      <StyledIcon>
        <ShoppingCartOutlinedIcon />
      </StyledIcon>
    ),
    path: '/cart',
    component: 'Cart',
  },
  {
    label: (
      <StyledIcon>
        <FavoriteBorderOutlinedIcon />
      </StyledIcon>
    ),
    path: '/wishlist',
    component: 'WishList',
  },
  {
    label: (
      <StyledIcon>
        <DirectionsBoatFilledOutlinedIcon />
      </StyledIcon>
    ),
    path: '/track-orders',
    component: 'TrackOrders',
  },
  {
    label: (
      <StyledIcon>
        <Person4Icon />
      </StyledIcon>
    ),
    path: '/loginSignup',
    component: 'LoginSignupComponent',
  },
];