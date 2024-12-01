import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as BR } from "react-router";

import './index.css';
import App from "./App";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BR >
        <App />
      </BR>
    </Provider>
  </React.StrictMode>
);
