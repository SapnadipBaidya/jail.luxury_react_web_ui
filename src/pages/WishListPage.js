import React from 'react';
import { useAuth } from '../contexts/AuthProvider';

function WishListPage() {
  const { user, login, logout, accessToken, refreshAccessToken } = useAuth();
  return (
    <div>
      {user?<>wishlist page</>:<>Please Login</>}
      
    </div>
  );
}

export default WishListPage;
