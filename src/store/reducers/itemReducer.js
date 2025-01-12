const initialState = {
    loading: false,
    data: null,
    error: null,
    payload:""
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_ITEMS_BY_CATEGORY_REQUEST":
        return { ...state, loading: true,payload:action.payload , error: null };
      case "FETCH_ITEMS_BY_CATEGORY_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "FETCH_ITEMS_BY_CATEGORY_FAILURE":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default itemReducer;