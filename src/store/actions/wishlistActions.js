export const fetchUserWishlist = (userId) => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_USER_WISHLIST_REQUEST",
        payload: userId,
      });
    };
  };

  export const fetchUserWishlistSuccess = (data) => ({
    type: "FETCH_USER_WISHLIST_SUCCESS",
    payload: data,
  });
  
  export const fetchUserWishlistFailure = (error) => ({
    type: "FETCH_USER_WISHLIST_FAILED",
    payload: error,
  });  