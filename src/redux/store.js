// Import Redux Components
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

// Import Reducers
import rootReducer from "./root-reducer";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;