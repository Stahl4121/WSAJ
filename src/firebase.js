//Reasoning for this file: https://stackoverflow.com/questions/48492047/where-do-i-initialize-firebase-app-in-react-application

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

//Import everything, not recommended for production apps
//import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCqevG1-_OfwmjZracZiLG13g6tebEgDpA",
    authDomain: "wsaj-7626d.firebaseapp.com",
    databaseURL: "https://wsaj-7626d.firebaseio.com",
    projectId: "wsaj-7626d",
    storageBucket: "wsaj-7626d.appspot.com",
    messagingSenderId: "733088160411",
    appId: "1:733088160411:web:f1a400d879f0989999c43e",
    measurementId: "G-S2ET4F7W02"
  };

firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();