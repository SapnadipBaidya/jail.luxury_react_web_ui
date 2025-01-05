import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function CartPage() {
  const { loginWithRedirect, logout, getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  return (
    <div>
      {isAuthenticated?<>cart page</>:<>Please Login</>}
      
    </div>
  );
}

export default CartPage;
