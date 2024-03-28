import firebase from "firebase/app";
import "firebase/auth"; // If you're using Firebase authentication
import "firebase/firestore"; // If you're using Firebase Firestore
// Add other Firebase services that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCyLPuUC5d1PZK4W1OLIdpLQXPXCHr_kPI",
  authDomain: "dothis-a2801.firebaseapp.com",
  projectId: "dothis-a2801",
  storageBucket: "dothis-a2801.appspot.com",
  messagingSenderId: "474233975978",
  appId: "1:474233975978:web:e458c247db36b94a5fccd3",
};

firebase.initializeApp(firebaseConfig);
