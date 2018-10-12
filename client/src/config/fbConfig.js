import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCA5ZsaUC2WMhOqt8aDjfYKAC0d6_zl1Dk",
    authDomain: "movies-8.firebaseapp.com",
    databaseURL: "https://movies-8.firebaseio.com",
    projectId: "movies-8",
    storageBucket: "movies-8.appspot.com",
    messagingSenderId: "1048416247689"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
