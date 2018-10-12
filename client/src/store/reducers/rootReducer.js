import authReducer from "./authReducer";
import movieReducer from "./movieReducer";
import ratingsReducer from "./ratingsReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  activeMovie: movieReducer,
  ratings: ratingsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;

