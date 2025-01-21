import { call, put, select, takeLatest } from "redux-saga/effects";
import { makePostAPIcall } from "../../utils/API_vendor";
import { getSizeFilterByCatagoryFailed, getSizeFilterByCatagorySuccess } from "../actions/itemActions";

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

function* handleFetchAllSizesByCatagoryId() {
  try {
    const resPayload = yield select((state) => state?.itemReducer?.categoryPayload);
    const response = yield call(
      makePostAPIcall,
      "http://localhost:8080/api/filters/getSizeFilterByCatagory",
      { "categoryId": resPayload }
    );
    console.log("response", response);
    yield put(getSizeFilterByCatagorySuccess(response?.data?.data));

    
  } catch (error) {
    console.log(error);
    yield put(getSizeFilterByCatagoryFailed(error.message));
    
  }
}


export function* watchFindAllProductsByCatagoryId() {
  yield takeLatest(
    "FETCH_ITEMS_BY_CATEGORY_REQUEST",
    handleFindAllProductsByCatagoryId
  );
}

export function* watchFetchAllSizesByCatagoryId() {
  yield takeLatest(
    "FETCH_SIZE_FILTER_REQUEST",
    handleFetchAllSizesByCatagoryId
  );
}
