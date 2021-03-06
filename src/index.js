// Import React Components
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Import CSS
import "./index.css";

// Import Components
import App from "./App";
import { store, persistor } from './redux/store'
//import  from './redux/store'

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
