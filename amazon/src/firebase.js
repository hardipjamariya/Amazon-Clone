// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBLbiFwPT9vvZSFRniqtWnkXSFgkE2Htww",
  authDomain: "fir-69a22.firebaseapp.com",
  projectId: "fir-69a22",
  storageBucket: "fir-69a22.appspot.com",
  messagingSenderId: "730963746728",
  appId: "1:730963746728:web:d7939f3f1fa16fcc31c79d",
  measurementId: "G-9XH2235MP0"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider }

