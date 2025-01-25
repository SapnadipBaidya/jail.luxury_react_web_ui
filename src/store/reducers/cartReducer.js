const initialState = {
    loading: false,
    data: null,
    error: null,
    payload:""
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USER_CART_REQUEST":
        return { ...state, loading: true,payload:action.payload , error: null };
      case "FETCH_USER_CART_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "FETCH_USER_CART_FAILED":
        return { ...state, loading: false, error: action.payload }; 
      default:
        return state;
    }
  };
  
  export default cartReducer;