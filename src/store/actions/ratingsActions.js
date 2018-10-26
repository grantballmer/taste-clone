export const likeMovie = movieId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    const userRef = firestore.collection('users').doc(userId);
    const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=d35fc236a158c3b822381b3271c75664&language=en-US&page=1`;


    window.fetch(url)
      .then(res => res.json())
      .then(result => result.results)
      .then((recs) => {

        //using firebase object to store 
        userRef.get()
          .then(doc => {
            const recommendations = doc.data().recommendations;

            recs.forEach((movie, index) => {
              let count = recommendations[movie.id] ? recommendations[movie.id].count + 1 : 1;
              recommendations[movie.id] = {
                title: movie.title,
                poster_path: movie.poster_path,
                count: count,
                vote_average: movie.vote_average,
                release_date: movie.release_date,
                id: movie.id
              };
            });

            userRef.update({
              recommendations: { ...recommendations }
            });
            dispatch({ type: "UPDATE_RECOMMENDATIONS", recs: recommendations });
          });

      })
      .then(() => {
        userRef.update({
          seen: firestore.FieldValue.arrayUnion({ movieId: movieId, like: true }),
        });
      })
      .then((recommendations) => {
        dispatch({ type: "ADD_LIKE", movieId: movieId });
      })
      .catch(err => {
        console.log(err);
      });


    // firestore.collection('users').doc(userId).update({
    //   seen: firestore.FieldValue.arrayUnion({ movieId: movieId, like: true })
    // })
    // .then(() => {

    // })
    // .then((recommendations) => {
    //   console.log(recommendations);
    //   dispatch({ type: "ADD_LIKE", movieId: movieId });
    // })
    // .catch(err => {
    //   console.log(err);
    // })

  };
};

// firestore.collection('users').doc(userId).update({
//         seen: firestore.FieldValue.arrayUnion({ movieId: movieId, like: true })
//       })
//       .then(() => {

//       })
//       .then((recommendations) => {
//         console.log(recommendations);
//         dispatch({ type: "ADD_LIKE", movieId: movieId });
//       })
//       .catch(err => {
//         console.log(err);
//       })

export const dislikeMovie = movieId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    firestore.collection('users').doc(userId).update({
        seen: firestore.FieldValue.arrayUnion({ movieId: movieId, like: false })
      })
      .then(() => {
        dispatch({ type: "ADD_DISLIKE", movieId: movieId });
      })
      .catch(err => {
        console.log(err);
      })
  };
};

export const deleteRating = (movieId, like) => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    const userRef = firestore.collection('users').doc(userId);

    if (like) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=d35fc236a158c3b822381b3271c75664&language=en-US&page=1`;

      window.fetch(url)
        .then(res => res.json())
        .then(result => result.results)
        .then(recs => {

          userRef.get()
            .then(doc => {
              const recommendations = doc.data().recommendations;
              const seen = doc.data().seen;

              recs.forEach((movie, index) => {
                let count = recommendations[movie.id] ? recommendations[movie.id].count - 1 : null;

                if (count > 0) {
                  recommendations[movie.id] = {
                    title: movie.title,
                    poster_path: movie.poster_path,
                    count: count,
                    vote_average: movie.vote_average,
                    release_date: movie.release_date
                  };
                }
                else {
                  delete recommendations[movie.id];
                }

              });

              userRef.update({
                recommendations: { ...recommendations },
                seen: seen.filter(item => item.movieId !== movieId)
              });

              dispatch({ type: "UPDATE_RECOMMENDATIONS", recs: recommendations });

            });
        })
        .then(() => {
          dispatch({ type: "DELETE_RATING", id: movieId });
        })
        .catch(err => {
          console.log(err);
        });

    }
    else {
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
};


// firebase recommendations array start 

// userRef.get()
//   .then(doc => {
//     const recommendations = doc.data().recommendations

//     rec.forEach(movie => {
//       let found = recommendations.some((firebaseMovie, index) => {
//         return [movie.id === firebaseMovie.movieId, index];
//       });

//       if (found) {
//         userRef.update({
//           recommendations: 
//         })
//       } else {
//         recommendations: firestore.FieldValue.arrayUnion(movie)
//       }

//     })
