import React from "react";
import { render } from "react-dom";
import history from "./history";
// import { BrowserRouter as Router } from "react-router-dom";
import {Router} from "react-router-dom";
import ScrollToTop from "./services/ScrollToTop";
import App from "./App";

render(
  <Router history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
