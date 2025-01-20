const initialState = {
  loading: false,
  data: null,
  delData:null,
  addData:null,
  error: null,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_WISHLIST_REQUEST":
      return { ...state, loading: true, payload: action.payload, error: null };
    case "FETCH_USER_WISHLIST_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_USER_WISHLIST_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_USER_WISHLIST_REQUEST":
      return { ...state, loading: true, payload: action.payload, error: null };
    case "DELETE_USER_WISHLIST_SUCCESS":
      return { ...state, loading: false, delData: action.payload };
    case "DELETE_USER_WISHLIST_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "ADD_USER_WISHLIST_REQUEST":
      return { ...state, loading: true, payload: action.payload, error: null };
    case "ADD_USER_WISHLIST_SUCCESS":
      return { ...state, loading: false, addData: action.payload };
    case "ADD_USER_WISHLIST_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default wishlistReducer;
