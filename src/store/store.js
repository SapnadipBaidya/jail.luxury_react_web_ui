import createSagaMiddleware from "redux-saga";
import {thunk} from "redux-thunk";
import rootSaga from "./sagas/rootSaga";
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./reducers/rootReducer";
const sagaMiddleware = createSagaMiddleware();
const middleWares = [thunk,sagaMiddleware];
const store = createStore(
    rootReducer,
    {},
    compose( applyMiddleware(...middleWares))
)
sagaMiddleware.run(rootSaga);
export default store;