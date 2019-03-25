import history from "../../history";

export const signIn = credentials => {
  return (dispatch, state, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .then(() => history.push("/"))
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err: err });
      });
  };
};

export const signOut = () => {
  return (dispatch, state, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/login");
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            username: newUser.username,
            watchlist: [],
            seen: [],
            recommendations: {}
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const facebookSignUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    // const firestore = getFirestore();

    // const firestore = getFirestore();
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user.uid;
        //
        return user;
      })
      .then(res => {
        const firestore = getFirestore();
        const userRef = firestore.collection("users").doc(res);
        userRef.get().then(docSnapshot => {
          if (!docSnapshot.exists) {
            return userRef.set({
              watchlist: [],
              seen: [],
              recommendations: {}
            });
          }
        });
      })
      .then(res => {
        console.log("login success");
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .then(() => history.push("/"))
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorCode, errorMessage, email, credential);
      });
  };
};

export const verifyAuth = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    function dispatches(result) {
      dispatch({
        type: "GET_WATCHLIST",
        watchlist: result.data().watchlist
      });
      dispatch({
        type: "GET_RATINGS",
        ratings: result.data().seen
      });
      dispatch({
        type: "UPDATE_RECOMMENDATIONS",
        recs: result.data().recommendations
      });
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then(res => {
            if (res.data() === undefined) {
              setTimeout(function() {
                const userRef = firestore.collection("users").doc(user.uid);
                userRef.get().then(docSnapshot => {
                  dispatches(docSnapshot);
                  // dispatch({
                  //   type: "GET_WATCHLIST",
                  //   watchlist: docSnapshot.data().watchlist
                  // });
                  // dispatch({
                  //   type: "GET_RATINGS",
                  //   ratings: docSnapshot.data().seen
                  // });
                  // dispatch({
                  //   type: "UPDATE_RECOMMENDATIONS",
                  //   recs: docSnapshot.data().recommendations
                  // });
                });
              }, 500);
            } else {
              dispatches(res);
              // dispatch({
              //   type: "GET_WATCHLIST",
              //   watchlist: res.data().watchlist
              // });
              // dispatch({ type: "GET_RATINGS", ratings: res.data().seen });
              // dispatch({
              //   type: "UPDATE_RECOMMENDATIONS",
              //   recs: res.data().recommendations
              // });
            }
          });
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        console.log("no user");
        dispatch({ type: "SIGNOUT_SUCCESS" });
      }
    });
  };
};
