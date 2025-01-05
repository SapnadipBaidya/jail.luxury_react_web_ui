import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DirectionsBoatFilledOutlinedIcon from '@mui/icons-material/DirectionsBoatFilledOutlined';
import { styled } from '@mui/material/styles';
import StyledIcon from '../components/wrappers/StyledIcon';

export const navigationConfig = [
  {
    label: "",
    path: '/',
    component: 'Home',
  },
  {
    label: <StyledIcon icon={ShoppingCartOutlinedIcon} />,
    path: '/cart',
    component: 'Cart',
  },
  {
    label: <StyledIcon icon={FavoriteBorderOutlinedIcon} />,
    path: '/wishlist',
    component: 'WishList',
  },
  {
    label: "",
    path: '/orders',
    component: 'Orders',
  },
  {
    label: "",
    path: '/track-orders',
    component: 'TrackOrders',
  },
  {
    label: "",
    path: '/login-signup',
    component: 'LoginSignup',
  }
];