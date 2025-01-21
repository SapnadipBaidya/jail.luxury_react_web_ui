export const findItemsByCatagoryId = (data) => {
  console.log("findItemsByCatagoryId", data);
  return (dispatch) => {
    dispatch({
      type: "FETCH_ITEMS_BY_CATEGORY_REQUEST",
      payload: data,
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

export const getSizeFilterByCatagory = (categoryId) => {
  console.log(" getSizeFilterByCatagory categoryId", categoryId);
  return (dispatch) => {
    dispatch({
      type: "FETCH_SIZE_FILTER_REQUEST",
      payload: categoryId,
    });
  };
};

export const getSizeFilterByCatagorySuccess = (data) => ({
  type: "FETCH_SIZE_FILTER_SUCCESS",
  payload: data,
});

export const getSizeFilterByCatagoryFailed = (error) => ({
  type: "FETCH_SIZE_FILTER_FAILED",
  payload: error,
});
