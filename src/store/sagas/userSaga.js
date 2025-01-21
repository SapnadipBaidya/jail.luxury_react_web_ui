import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUserSuccess, fetchUserFailure } from "../actions/userActions";

// Simulate an API call
const fetchUserApi = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve({ name: "John Doe", age: 30 }), 1000)
  );
};

// Worker saga: handles FETCH_USER_REQUEST
function* fetchUser() {
  try {
    const user = yield call(fetchUserApi);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

// Watcher saga: watches for actions dispatched to the store and starts worker saga
function* watchFetchUser() {
  yield takeLatest("FETCH_USER_REQUEST", fetchUser);
}

export default watchFetchUser;