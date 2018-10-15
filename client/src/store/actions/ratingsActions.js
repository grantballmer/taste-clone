export const likeMovie = movieId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore.get({ collection: "users", doc: userID });
    dispatch({ type: "ADD_LIKE", id: movieId });
  };
};

export const dislikeMovie = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    // const firestore = getFirestore();
    dispatch({ type: "ADD_DISLIKE", id: id });
  };
};
