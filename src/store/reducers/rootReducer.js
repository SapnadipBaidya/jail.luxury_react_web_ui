import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer"
import itemReducer from "./itemReducer";

// Combine all reducers
const rootReducer = combineReducers({
    userReducer: userReducer,
    categoryReducer:categoryReducer,
    itemReducer:itemReducer

});

export default rootReducer;