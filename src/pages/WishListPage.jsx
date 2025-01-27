import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserWishlist } from '../store/actions/wishlistActions';
import GridWrapper from '../components/wrappers/GridWrapper';
import LoginSignupPage from './LoginSignupPage';

function WishListPage() {
  const { user} = useAuth();
  console.log("user",user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserWishlist(user?.id));
  }, [user?.id])
  const itemsArr = useSelector((state) => state.wishlistReducer);
 
  return (
    <div>
      {user?.id?<>
      
        <GridWrapper type="Wishlist" itemsArr={itemsArr} />
      
      </>:<LoginSignupPage/>}
      
    </div>
  );
}

export default WishListPage;
