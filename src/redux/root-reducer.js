// Import Redux Components
import { combineReducers } from "redux";

// Import Reducer
import userReducer from "./user/user.reducer";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

export default combineReducers({
    user: userReducer
});