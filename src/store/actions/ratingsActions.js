export const likeMovie = movieId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    
    firestore.collection('users').doc(userId).update({
      seen: firestore.FieldValue.arrayUnion({movieId: movieId, like: true})
    })
    .then(() => {
      dispatch({ type: "ADD_LIKE", movieId: movieId });
    })
    .catch(err => {
      console.log(err);
    })
    
  };
};

export const dislikeMovie = movieId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    
    firestore.collection('users').doc(userId).update({
      seen: firestore.FieldValue.arrayUnion({movieId: movieId, like: false})
    })
    .then(() => {
      dispatch({ type: "ADD_DISLIKE", movieId: movieId });
    })
    .catch(err => {
      console.log(err);
    })
  };
};

export const deleteRating = movieId => {
  
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    
    const userRef = firestore.collection('users').doc(userId);
    
    userRef.get()
    .then(doc => {
      const seen = doc.data().seen;
      userRef.update({
        seen: seen.filter(item => item.movieId !== movieId)
      });
    })
    .then(() => {
      dispatch({ type: "DELETE_RATING", id: movieId });
    })
    .catch(err => {
      console.log(err);
    })
    
    
  }
}
