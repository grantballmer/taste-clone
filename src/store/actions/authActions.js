import history from "../../history";

export const signIn = credentials => {
  return (dispatch, state, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((res) => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .then(() => history.push('/'))
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
        dispatch({ type: "SIGNOUT_SUCCESS" });
        history.push("/login");
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
            like: [],
            dislike: []
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
    const firestore = getFirestore();
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

  }
}

export const verifyAuth = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();


    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firestore.collection('users').doc(user.uid).get()
          .then((res) => {
            dispatch({ type: "GET_WATCHLIST", watchlist: res.data().watchlist });
            dispatch({ type: "GET_RATINGS", ratings: res.data().seen });
          });
        dispatch({ type: "LOGIN_SUCCESS" });
      }
      else {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      }
    });
  };
};
