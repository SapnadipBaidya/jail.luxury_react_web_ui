import { call, put, select, takeLatest } from "redux-saga/effects";
import { makeGetAPIcall, makePostAPIcall } from "../../utils/API_vendor";
import { findProductByProductIdFailed, findProductByProductIdSuccess } from "../actions/productActions";


// Worker saga: handles FETCH_USER_REQUEST
function* handleForFetchProductByPid() {
  try {
    
      const resPayload = yield select((state) => state?.productReducer?.payload);
      console.log();

      const response = yield call(
        makePostAPIcall,
        "http://localhost:8080/api/products/findProductsByPdId",
        { payloadObj: resPayload }
      );
      console.log("response", response);
      yield put(findProductByProductIdSuccess(response?.data?.responseData));
  
      
    } catch (error) {
      console.log(error);
      yield put(findProductByProductIdFailed(error.message));
      
    }
}

// Watcher saga: watches for actions dispatched to the store and starts worker saga
export function* watchForFetchProductByPid() {
  
    yield takeLatest("FETCH_PRODUCT_BY_PID_REQUEST", handleForFetchProductByPid);
}



