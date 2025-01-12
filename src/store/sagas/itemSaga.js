import { call, put, select, takeLatest } from "redux-saga/effects";
import {  makePostAPIcall } from "../../utils/API_vendor";


// Worker saga: handles FETCH_USER_REQUEST
function* handleFindAllProductsByCatagoryId() {
  try {
   
    const payload = yield select((state=>state?.itemReducer?.payload))

    const category = yield call(makePostAPIcall("http://localhost:8080/api/products/findAllProductsByCatagoryId",{"categoryId":payload}));
    yield put({type:"FETCH_ITEMS_BY_CATEGORY_SUCCESS",response:category});
  } catch (error) {
    yield put({type:"FETCH_ITEMS_BY_CATEGORY_FAILURE",error:error.message});
  }
}


export function* watchFindAllProductsByCatagoryId() {
  yield takeLatest("FETCH_ITEMS_BY_CATEGORY_REQUEST", handleFindAllProductsByCatagoryId);
}

