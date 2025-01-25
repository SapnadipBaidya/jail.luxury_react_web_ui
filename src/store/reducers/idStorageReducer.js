const initialState = {
  id: "",
  productId: "",
  productDetailsId: "",
};

const idStorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_CATEGORY_ID_GLOBALLY":
      return { ...state, id: action.payload };
    case "DELETE_CATEGORY_ID_GLOBALLY":
      return { ...state, id: "" };
    case "STORE_PRODUCT_ID_GLOBALLY":
      return { ...state, productId: action.payload };
    case "DELETE_PRODUCT_ID_GLOBALLY":
      return { ...state, productId: "" };
    case "STORE_PRODUCT_DETAILS_ID_GLOBALLY":
      return { ...state, productDetailsId: action.payload };
    case "DELETE_PRODUCT_DETAILS_ID_GLOBALLY":
      return { ...state, productDetailsId: "" };
    default:
      return state;
  }
};

export default idStorageReducer;
