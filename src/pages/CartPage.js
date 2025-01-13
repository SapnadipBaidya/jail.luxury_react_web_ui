import React from 'react';
import { useAuth } from '../contexts/AuthProvider';

function CartPage() {
  const { user, login, logout, accessToken, refreshAccessToken } = useAuth();
  return (
    <div>
      {user?<>cart page</>:<>Please Login</>}
      
    </div>
  );
}

export default CartPage;
