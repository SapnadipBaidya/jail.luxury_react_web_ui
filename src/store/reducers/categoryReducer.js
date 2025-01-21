const initialState = {
    loading: false,
    data: null,
    error: null,
    payload:""
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_CATEGORY_BY_ID_REQUEST":
        return { ...state, loading: true,payload:action.payload , error: null };
      case "FETCH_CATEGORY_BY_ID_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "FETCH_CATEGORY_BY_ID_FAILURE":
        return { ...state, loading: false, error: action.payload };
      case "FETCH_ALL_CATEGORY_REQUEST":
        return { ...state, loading: true,payload:action.payload , error: null };
      case "FETCH_ALL_CATEGORY_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "FETCH_ALL_CATEGORY_FAILURE":
        return { ...state, loading: false, error: action.payload };  
      default:
        return state;
    }
  };
  
  export default categoryReducer;