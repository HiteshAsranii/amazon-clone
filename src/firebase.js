import  firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC7AOBKk7UNulFOJvSOiLNxbnQgyFJEB3E",
  authDomain: "app-eaef6.firebaseapp.com",
  projectId: "app-eaef6",
  storageBucket: "app-eaef6.appspot.com",
  messagingSenderId: "651495349655",
  appId: "1:651495349655:web:e039c480d3ca31d339f8d2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };