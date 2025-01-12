  export const fetchCategoryById = (categoryId) => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_CATEGORY_BY_ID_REQUEST",
        payload: categoryId,
      });
    };
  };

  export const fetchAllCategories = () => {
    return (dispatch) => {
      dispatch({
        type: "FETCH_ALL_CATEGORY_REQUEST"
      });
    };
  };