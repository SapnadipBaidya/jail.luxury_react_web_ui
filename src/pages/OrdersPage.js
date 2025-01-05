import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import OrdersListViewAccordian from './../components/ordersComponent/OrdersListViewAccordian';

function OrdersPage() {
  const { loginWithRedirect, logout, getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  console.log("OrdersPage",isAuthenticated);
  return (
    <div>
      {
        !isAuthenticated ? <>please log in or sign up</>:
        <>
        <OrdersListViewAccordian/>
        </>
      }
    </div>
  );
}

export default OrdersPage;
