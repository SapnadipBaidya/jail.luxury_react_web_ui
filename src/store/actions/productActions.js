  
export const findProductByProductId = (reqData) => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_PRODUCT_BY_PID_REQUEST",
        payload: reqData,
      });
    };
  };
  
  export const findProductByProductIdSuccess = (data) => ({
    type: "FETCH_PRODUCT_BY_PID_SUCCESS",
    payload: data,
  });
  
  export const findProductByProductIdFailed = (error) => ({
    type: "FETCH_PRODUCT_BY_PID_FAILED",
    payload: error,
  });
  