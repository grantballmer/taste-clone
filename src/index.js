import React from "react";
import { render } from "react-dom";
import history from "./history";
// import { BrowserRouter as Router } from "react-router-dom";
import { Router } from "react-router-dom";
import ScrollToTop from "./services/ScrollToTop";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { verifyAuth } from "./store/actions/authActions";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

store.dispatch(verifyAuth());

console.log(process.env.PUBLIC_URL);
// const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Router history={history} >
    <ScrollToTop>
      <Provider store={store}>
        <App />
      </Provider>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);


// https://tighten.co/blog/react-101-part-4-firebase
