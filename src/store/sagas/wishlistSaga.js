import { call, put, select, takeLatest } from "redux-saga/effects";
import { makePostAPIcall } from "../../utils/API_vendor";
import {
  deleteUserWishlistFailure,
  deleteUserWishlistSuccess,
  fetchUserWishlistFailure,
  fetchUserWishlistSuccess,
} from "../actions/wishlistActions";

// Worker saga: handles FETCH_USER_REQUEST
function* handleFetchWishlistForUser() {
  try {
    const resPayload = yield select((state) => state?.wishlistReducer?.payload);
    const response = yield call(
      makePostAPIcall,
      "http://localhost:8080/api/wishlist/fetchUserWishlist",
      { payloadObj: { userId: resPayload } }
    );
    console.log("response", response);
    yield put(fetchUserWishlistSuccess(response?.data?.data));
  } catch (error) {
    console.log(error);
    yield put(fetchUserWishlistFailure(error.message));
  }
}

function* handleDeleteWishlistForUser() {
  try {
    const resPayload = yield select((state) => state?.wishlistReducer?.payload);
    const response = yield call(
      makePostAPIcall,
      "http://localhost:8080/api/wishlist/deleteFromUserWishlist",
      { payloadObj: resPayload }
    );
    console.log("response", response);
    yield put(deleteUserWishlistSuccess(response?.data?.data));

    const responseData = yield call(
      makePostAPIcall,
      "http://localhost:8080/api/wishlist/fetchUserWishlist",
      { payloadObj: { userId: resPayload?.userId } }
    );
    console.log("responseData", response);
    yield put(fetchUserWishlistSuccess(responseData?.data?.data));
  } catch (error) {
    console.log(error);
    yield put(deleteUserWishlistFailure(error.message));
  }
}

function* handleAddEditWishlistForUser() {
  try {
    const resPayload = yield select((state) => state?.wishlistReducer?.payload);
    const response = yield call(
      makePostAPIcall,
      "http://localhost:8080/api/wishlist/addOrEditWishlist",
      { payloadObj: resPayload }
    );
    console.log("response", response);
    yield put(fetchUserWishlistSuccess(response?.data?.data));
  } catch (error) {
    console.log(error);
    yield put(fetchUserWishlistFailure(error.message));
  }
}

// Watcher saga: watches for actions dispatched to the store and starts worker saga
function* watcherForAddEditUserWishlist() {
  yield takeLatest("ADD_USER_WISHLIST_REQUEST", handleAddEditWishlistForUser);
}

function* watcherForUserWishlist() {
  yield takeLatest("FETCH_USER_WISHLIST_REQUEST", handleFetchWishlistForUser);
}

function* watcherForDeleteUserWishlist() {
  yield takeLatest("DELETE_USER_WISHLIST_REQUEST", handleDeleteWishlistForUser);
}

export {
  watcherForUserWishlist,
  watcherForDeleteUserWishlist,
  watcherForAddEditUserWishlist,
};
