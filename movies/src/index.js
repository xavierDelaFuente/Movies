import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./components/Routes";
import registerServiceWorker from "./registerServiceWorker";
import appStore from "./store";
import { Provider } from "react-redux";

const store = appStore();
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
