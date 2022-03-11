// Import Redux Components
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

// Import Reducers
import rootReducer from "./root-reducer";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export default { store, persistor };