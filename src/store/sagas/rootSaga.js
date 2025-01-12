import { all } from "redux-saga/effects";
import watchFetchUser from "./userSaga";
import {watchFetchAllCategory, watchFetchCategoryById } from "./categorySaga";
import { watchFindAllProductsByCatagoryId } from "./itemSaga";

// Combine all sagas
export default function* rootSaga() {
  yield all([watchFetchUser(),watchFetchAllCategory(),watchFetchCategoryById(),watchFindAllProductsByCatagoryId()]);
}