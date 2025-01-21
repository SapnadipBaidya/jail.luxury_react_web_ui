import React from 'react';
import axios from 'axios';
import OrdersListViewAccordian from '../components/ordersComponent/OrdersListViewAccordian';
import { useAuth } from '../contexts/AuthProvider';

function OrdersPage() {
  const { user, login, logout, accessToken, refreshAccessToken } = useAuth();
  console.log("OrdersPage",user);
  return (
    <div>
      {
        !user ? <>please log in or sign up</>:
        <>
        <OrdersListViewAccordian/>
        </>
      }
    </div>
  );
}

export default OrdersPage;
