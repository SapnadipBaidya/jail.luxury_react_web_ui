const initialState = {
  loading: false,
  data: null,
  sizeData: [],
  colorData: [],
  error: null,
  categoryPayload: "",
  sizePayload:"",
  sizeLoading: false,
  colorLoading: false,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_BY_CATEGORY_REQUEST":
      return { ...state, loading: true, categoryPayload: action.payload, error: null };
    case "FETCH_ITEMS_BY_CATEGORY_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_ITEMS_BY_CATEGORY_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "FETCH_SIZE_FILTER_REQUEST":
      return {
        ...state,
        sizeLoading: true,
        sizePayload: action.payload,
        error: null,
      };
    case "FETCH_SIZE_FILTER_SUCCESS":
      return { ...state, sizeLoading: false, sizeData: action.payload };
    case "FETCH_SIZE_FILTER_FAILED":
      return { ...state, sizeLoading: false, error: action.payload };

    case "FETCH_COLOR_FILTER_REQUEST":
      return {
        ...state,
        colorLoading: true,
        error: null,
      };
    case "FETCH_COLOR_FILTER_SUCCESS":
      return { ...state, colorLoading: false, colorData: action.payload };
    case "FETCH_COLOR_FILTER_FAILED":
      return { ...state, colorLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default itemReducer;
