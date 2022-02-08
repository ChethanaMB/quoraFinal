import firebase from "firebase";
// Import the functions you need from the SDKs you need

//import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCoMfc_AibUVPvuev4J_d9GOB6REtBh5eQ",

  authDomain: "college-quora-ced7a.firebaseapp.com",

  projectId: "college-quora-ced7a",

  storageBucket: "college-quora-ced7a.appspot.com",

  messagingSenderId: "268769991448",

  appId: "1:268769991448:web:9eebad52f144a319505c6d",

  measurementId: "G-GY8BLF2M8L"

};


// Initialize Firebase

//const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
