import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLDJ_53pISei2jLWfdZTXzrYQ05JYdES0",
    authDomain: "clone-fe309.firebaseapp.com",
    projectId: "clone-fe309",
    storageBucket: "clone-fe309.appspot.com",
    messagingSenderId: "1074462061434",
    appId: "1:1074462061434:web:851c104d78456686e89cc3",
    measurementId: "G-NKCJH4QHBF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};