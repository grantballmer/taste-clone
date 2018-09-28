import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./services/ScrollToTop";
import App from "./App";

render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
