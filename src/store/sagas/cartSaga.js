import { call, put, select, takeLatest } from "redux-saga/effects";
import { makeGetAPIcall, makePostAPIcall } from "../../utils/API_vendor";
import { fetchUserCartFailure, fetchUserCartSuccess } from "../actions/cartActions";

function* handleForCartFetchByUser() {
  try {
    const payload = yield select((state=>state?.cartReducer.payload))

    const response = yield call(
      makePostAPIcall,
      "http://localhost:8080/api/cart/fetchUserCart",
      {
        payloadObj: payload,
      }
    );
    // console.log("inside try");
    console.log("response", response);
    yield put(fetchUserCartSuccess(response?.data?.data));
  } catch (error) {
    console.log("categories error", error);
     yield put(fetchUserCartFailure(error.message));
  }
}

export function* watchForCartFetchByUser() {
  yield takeLatest("FETCH_USER_CART_REQUEST", handleForCartFetchByUser);
}
