export const findItemsByCatagoryId = (categoryId) => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_ITEMS_BY_CATEGORY_REQUEST",
        payload: categoryId,
      });
    };
  };
