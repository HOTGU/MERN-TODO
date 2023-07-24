import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

import "./index.css";

const store = legacy_createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
