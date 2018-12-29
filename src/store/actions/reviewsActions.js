export const addReview = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const movieId = String(data.id);
    const movieRef = firestore.collection('reviews').doc(movieId);

    movieRef.update({
        reactions: firestore.FieldValue.arrayUnion(data)
      })
      .then(() => {
        dispatch({ type: "ADD_REVIEW", data: data });
      })
      .catch(err => {
        console.log(err);
      });

  };
};

// export const likeReview = data => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     const movieRef = firestore.collection('reviews').doc(data.movieId);

//     movieRef.get().then(doc => {
//       const allReactions = doc.data().reactions;
//       const reaction = allReactions[data.index];

//       data.like ? reaction.likes = data.arr : reaction.dislikes = data.arr;

//       movieRef.update({
//           reactions: allReactions
//         })
//         .then(() => {
//           dispatch({ type: "ADD_RATE_REVIEW", reaction })
//         })
//         .catch(err => console.log(err));
//     });
//   };
// };

export const rateReview = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const movieRef = firestore.collection('reviews').doc(data.movieId);

    movieRef.get().then(doc => {
      const allReactions = doc.data().reactions;
      const reaction = allReactions[data.index];

      data.like ? reaction.likes = data.arr : reaction.dislikes = data.arr;
      reaction.index = data.index;
      dispatch({ type: "ADD_RATE_REVIEW", reaction })

      movieRef.update({
          reactions: allReactions
        })
        // .then(() => {
        //   dispatch({ type: "ADD_RATE_REVIEW", reaction })
        // })
        .catch(err => console.log(err));
    });
  };
};

export const undoRateReview = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const movieRef = firestore.collection('reviews').doc(data.movieId);


    movieRef.get().then(doc => {
      const allReactions = doc.data().reactions;
      const reaction = allReactions[data.index];

      data.like ? reaction.likes = data.arr : reaction.dislikes = data.arr;

      movieRef.update({
          reactions: allReactions
        })
        .then(() => {
          dispatch({ type: "UNDO_RATE_REVIEW", reactions: allReactions });
        })
        .catch(err => console.log(err));
    });
  };
}
