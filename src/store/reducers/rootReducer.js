import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer"
import itemReducer from "./itemReducer";
import idStorageReducer from "./idStorageReducer";

// Combine all reducers
const rootReducer = combineReducers({
    userReducer: userReducer,
    categoryReducer:categoryReducer,
    itemReducer:itemReducer,
    idStorageReducer:idStorageReducer

});

export default rootReducer;