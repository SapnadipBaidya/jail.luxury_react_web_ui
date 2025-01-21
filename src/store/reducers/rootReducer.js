import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer"
import itemReducer from "./itemReducer";
import idStorageReducer from "./idStorageReducer";
import wishlistReducer from "./wishlistReducer";

// Combine all reducers
const rootReducer = combineReducers({
    userReducer: userReducer,
    categoryReducer:categoryReducer,
    itemReducer:itemReducer,
    idStorageReducer:idStorageReducer,
    wishlistReducer:wishlistReducer

});

export default rootReducer;