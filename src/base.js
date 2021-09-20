import * as firebase from "firebase/app"
import "firebase/firestore"
//for firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA4O4BRFSmyVsGCpvjf6H78flEWqvBBbRQ",
  authDomain: "pierre-3ff65.firebaseapp.com",
  projectId: "pierre-3ff65",
  storageBucket: "pierre-3ff65.appspot.com",
  messagingSenderId: "555399466869",
  appId: "1:555399466869:web:64ce44564effd219fe0d3c",
  measurementId: "G-DF5E3LXVEX"
  };

const app=firebase.initializeApp(firebaseConfig); 
const db=app.firestore();
//const auth=firebase.auth();
//const storage=firebase.storage();

 
export {app,db}