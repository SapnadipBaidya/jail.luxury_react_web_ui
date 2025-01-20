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

//////////////////////////////////////////////////////////////////////

export const addEditUserWishlist = (data) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_USER_WISHLIST_REQUEST",
      payload: data,
    });
  };
};

export const addEditUserWishlistSuccess = (data) => ({
  type: "ADD_USER_WISHLIST_SUCCESS",
  payload: data,
});

export const addEditUserWishlistFailure = (error) => ({
  type: "ADD_USER_WISHLIST_FAILED",
  payload: error,
});

//////////////////////////////////////////////////////////////////////

export const deleteUserWishlist = (data) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_USER_WISHLIST_REQUEST",
      payload: data,
    });
  };
};

export const deleteUserWishlistSuccess = (data) => ({
  type: "DELETE_USER_WISHLIST_SUCCESS",
  payload: data,
});

export const deleteUserWishlistFailure = (error) => ({
  type: "DELETE_USER_WISHLIST_FAILED",
  payload: error,
});
