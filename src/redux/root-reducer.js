// Import Redux Components
import { combineReducers } from "redux";

// Import Reducer
import userReducer from "./user/user.reducer";
import cartReducer from './cart/cart.reducer'

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});