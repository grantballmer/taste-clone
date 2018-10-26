import authReducer from "./authReducer";
import movieReducer from "./movieReducer";
import ratingsReducer from "./ratingsReducer";
import watchlistReducer from "./watchlistReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer,
  // activeMovie: movieReducer,
  ratings: ratingsReducer,
  watchlist: watchlistReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
