import firebase from 'firebase/app';    
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKW2npv2dQ9uUB3lk5QqA4Eec3Sk_wD44",
    authDomain: "fb-crud-react-fba7e.firebaseapp.com",
    projectId: "fb-crud-react-fba7e",
    storageBucket: "fb-crud-react-fba7e.appspot.com",
    messagingSenderId: "864769935870",
    appId: "1:864769935870:web:361cb3101ae13003ab18af"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
