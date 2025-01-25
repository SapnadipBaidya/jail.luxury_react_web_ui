export const fetchUserCart = (reqData) => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_USER_CART_REQUEST",
        payload: reqData,
      });
    };
  };
  
  export const fetchUserCartSuccess = (data) => ({
    type: "FETCH_USER_CART_SUCCESS",
    payload: data,
  });
  
  export const fetchUserCartFailure = (error) => ({
    type: "FETCH_USER_CART_FAILED",
    payload: error,
  });
  