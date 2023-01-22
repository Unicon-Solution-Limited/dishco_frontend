import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAL7kAdnVItOYFr4o6rCQ-p3bmtLZEfcY8",
  authDomain: "dishco-c3698.firebaseapp.com",
  projectId: "dishco-c3698",
  storageBucket: "dishco-c3698.appspot.com",
  messagingSenderId: "1074663610277",
  appId: "1:1074663610277:web:c98576cc14a3d994103a4c",
  measurementId: "G-X22NDNJE64",
});

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth();
export default app;
