const initialState = {
    id: "",
  };
  
  const idStorageReducer = (state = initialState, action) => {
    switch (action.type) {
      case "STORE_CATEGORY_ID_GLOBALLY":
        return { ...state, id:action.payload  };
      case "DELETE_CATEGORY_ID_GLOBALLY":
        return {...state};
      default:
        return state;
    }
  };
  
  export default idStorageReducer;