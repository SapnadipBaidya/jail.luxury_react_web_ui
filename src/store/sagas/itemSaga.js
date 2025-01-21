import { call, put, select, takeLatest } from "redux-saga/effects";
import { makePostAPIcall } from "../../utils/API_vendor";

// Worker saga: handles FETCH_USER_REQUEST
function* handleFindAllProductsByCatagoryId() {
  try {
    const resPayload = yield select((state) => state?.itemReducer?.payload);
    const response = yield call(
      makePostAPIcall,
      "http://localhost:8080/api/products/findAllProductsByCatagoryId",
      { payloadObj: resPayload }
    );
    console.log("response", response);
    yield put({
      type: "FETCH_ITEMS_BY_CATEGORY_SUCCESS",
      payload: response?.data?.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: "FETCH_ITEMS_BY_CATEGORY_FAILURE",
      error: error.message,
    });
  }
}

export function* watchFindAllProductsByCatagoryId() {
  yield takeLatest(
    "FETCH_ITEMS_BY_CATEGORY_REQUEST",
    handleFindAllProductsByCatagoryId
  );
}
