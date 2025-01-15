export const findItemsByCatagoryId = (categoryId) => {
  console.log("findItemsByCatagoryId",categoryId)
    return (dispatch) => {
      dispatch({
        type: "FETCH_ITEMS_BY_CATEGORY_REQUEST",
        payload: categoryId,
      });
    };
  };


  export const storeCatagoryIdGlobally = (categoryId) => ({
    type: "STORE_CATEGORY_ID_GLOBALLY",
    payload: categoryId,
  });
  
  export const deleteCatagoryIdGlobally = () => ({
    type: "DELETE_CATEGORY_ID_GLOBALLY",
  });