import { call, put, select, takeLatest } from "redux-saga/effects";
import { makePostAPIcall } from "../../utils/API_vendor";
import { fetchUserWishlistFailure, fetchUserWishlistSuccess } from "../actions/wishlistActions";


// Worker saga: handles FETCH_USER_REQUEST
function* handleFetchWishlistForUser() {
 try {
    
     const resPayload = yield select((state=>state?.wishlistReducer?.payload))
     const response = yield call(makePostAPIcall,"http://localhost:8080/api/wishlist/fetchUserWishlist",{payloadObj:{userId:resPayload}});
     console.log("response",response)
     yield put(fetchUserWishlistSuccess(response?.data?.data))
   } catch (error) {
     console.log(error)
     yield put(fetchUserWishlistFailure(error.message))
   }
}

// Watcher saga: watches for actions dispatched to the store and starts worker saga
function* watcherForUserWishlist() {
  yield takeLatest("FETCH_USER_WISHLIST_REQUEST", handleFetchWishlistForUser);
}

export default watcherForUserWishlist;