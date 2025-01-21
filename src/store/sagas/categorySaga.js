import { call, put, select, takeLatest } from "redux-saga/effects";
import { makeGetAPIcall } from "../../utils/API_vendor";


// Worker saga: handles FETCH_USER_REQUEST
function* handleFetchCategoryById() {
  try {
   
    const payload = yield select((state=>state?.categoryReducer.payload))

    const category = yield call(makeGetAPIcall("http://localhost:8080/api/items/findCatagoryById?catagoryId="+payload));
    yield put({type:"FETCH_CATEGORY_BY_ID_SUCCESS",response:category});
  } catch (error) {
    yield put({type:"FETCH_CATEGORY_BY_ID_FAILURE",error:error.message});
  }
}


function* handleFetchAllCategory() {
  try {
    const response = yield call(makeGetAPIcall,"http://localhost:8080/api/items/getAllCategories");
    // console.log("inside try");
    console.log("response",response)
    yield put({type:"FETCH_ALL_CATEGORY_SUCCESS",payload:response?.data?.data});
  } catch (error) {
    console.log("categories error",error)
    yield put({type:"FETCH_ALL_CATEGORY_FAILURE",error:error.message});
  }
}

// Watcher saga: watches for actions dispatched to the store and starts worker saga
export function* watchFetchCategoryById() {
  yield takeLatest("FETCH_CATEGORY_BY_ID_REQUEST", handleFetchCategoryById);
}


export function* watchFetchAllCategory() {

  yield takeLatest("FETCH_ALL_CATEGORY_REQUEST", handleFetchAllCategory);
}

