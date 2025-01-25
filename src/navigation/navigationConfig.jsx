import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StyledIcon from '../components/wrappers/StyledIcon.jsx';

export const navigationConfig = [
  {
    label: "Home",
    path: '/',
    component: 'Home',
    render:false
  },
  {
    label: <StyledIcon icon={ShoppingCartOutlinedIcon} />,
    path: '/cart',
    component: 'Cart',
    render:true
  },
  {
    label: <StyledIcon icon={FavoriteBorderOutlinedIcon} />,
    path: '/wishlist',
    component: 'WishList',
    render:true
  },
  {
    label: "Orders",
    path: '/orders',
    component: 'Orders',
    render:false
  },
  {
    label: "Track Orders",
    path: '/track-orders',
    component: 'TrackOrders',
    render:false
  },
  {
    label: "Login Signup",
    path: '/login-signup',
    component: 'LoginSignup',
    render:false
  },
  {
    label: "Items",
    path: '/items',
    component: 'Items',
    render:false
  },
  {
    label: "Product",
    path: '/product',
    component: 'Product',
    render:false
  }
  
];