import React from "react";
import { render } from "react-dom";
import history from "./history";
// import { BrowserRouter as Router } from "react-router-dom";
import { Router } from "react-router-dom";
import ScrollToTop from "./services/ScrollToTop";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

render(
  <Router history={history}>
    <ScrollToTop>
      <Provider store={store}>
        <App />
      </Provider>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
