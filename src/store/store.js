import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {thunk} from "redux-thunk"; // Fix: Import `thunk` correctly
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default to localStorage
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

// Step 1: Configure persist settings
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["idStorageReducer"], // Reducers to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Step 2: Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Step 3: Combine middlewares
const middleWares = [thunk, sagaMiddleware];

// Step 4: Enable Redux DevTools and middleware
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Step 5: Create the store
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleWares)) // Apply both middlewares
);

// Step 6: Run the root saga
sagaMiddleware.run(rootSaga);

// Step 7: Create the persistor
const persistor = persistStore(store);

export { store, persistor };