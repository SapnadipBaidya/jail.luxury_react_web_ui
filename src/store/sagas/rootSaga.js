import { all } from "redux-saga/effects";
import watchFetchUser from "./userSaga";
import {watchFetchAllCategory, watchFetchCategoryById } from "./categorySaga";
import { watchFetchAllColors, watchFetchAllSizesByCatagoryId, watchFindAllProductsByCatagoryId } from "./itemSaga";
import { watcherForAddEditUserWishlist, watcherForDeleteUserWishlist, watcherForUserWishlist } from "./wishlistSaga";


// Combine all sagas
export default function* rootSaga() {
  yield all([watchFetchUser(),watchFetchAllCategory(),watchFetchCategoryById(),watchFindAllProductsByCatagoryId(),watcherForUserWishlist(),watcherForDeleteUserWishlist(),watcherForAddEditUserWishlist(),watchFetchAllSizesByCatagoryId(),watchFetchAllColors()]);
}