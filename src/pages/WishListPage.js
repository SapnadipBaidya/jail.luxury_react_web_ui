import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function WishListPage() {
  const { loginWithRedirect, logout, getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  return (
    <div>
      {isAuthenticated?<>wishlist page</>:<>Please Login</>}
      
    </div>
  );
}

export default WishListPage;
