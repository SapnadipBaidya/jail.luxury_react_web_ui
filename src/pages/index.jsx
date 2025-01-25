
import React from 'react';

// export const NAME 
// { label: 'Your Label' , path: '/yourRoutePath', component: 'NAME'}, in navigationConfig.js
export const Home = React.lazy(() => import('./HomePage'));
export const Cart = React.lazy(() => import('./CartPage'));
export const WishList = React.lazy(() => import('./WishListPage'));
export const TrackOrders = React.lazy(() => import('./TrackOrdersPage'));
export const Orders = React.lazy(()=>import('./OrdersPage'))
export const LoginSignup = React.lazy(() => import('./LoginSignupPage'));
export const Items = React.lazy(() => import('./itemsPage'));
export const Product = React.lazy(() => import('./ProductPage'));