const initialState = {
    loading: false,
    data: null,
    error: null,
    payload:{}
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCT_BY_PID_REQUEST":
        return { ...state, loading: true,payload:action.payload , error: null };
      case "FETCH_PRODUCT_BY_PID_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "FETCH_PRODUCT_BY_PID_FAILED":
        return { ...state, loading: false, error: action.payload }; 
      default:
        return state;
    }
  };
  
  export default productReducer;