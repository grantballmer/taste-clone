export const addToWatchlist = movie => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    console.log(userId);
    
    firestore.collection('users').doc(userId).update({
      watchlist: firestore.FieldValue.arrayUnion(movie)
    })
    .then(() => {
      dispatch({ type: "ADD_TO_WATCHLIST", movie: movie});
    })
    .catch(err => {
      console.log(err);
    });
    
  };
};

export const removeFromWatchlist = movie => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    
    const userRef = firestore.collection('users').doc(userId);
    
    userRef.get()
    .then(doc => {
      const watchlist = doc.data().watchlist;
      userRef.update({
        watchlist: watchlist.filter(item => item.id !== movie.id)
      });
    })
    .then(() => {
      dispatch({ type: "REMOVE_FROM_WATCHLIST", movie: movie});
    })
    .catch(err => {
      console.log(err);
    })
    
  };
};