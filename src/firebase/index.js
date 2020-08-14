import firebase from 'firebase/app'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCHIJQ9_1VFReFN8f_yQTlC-cM5BLHGwQg",
    authDomain: "react-d6a8e.firebaseapp.com",
    databaseURL: "https://react-d6a8e.firebaseio.com",
    projectId: "react-d6a8e",
    storageBucket: "react-d6a8e.appspot.com",
    messagingSenderId: "36437910681",
    appId: "1:36437910681:web:a105806dbca2203a33c408",
    measurementId: "G-V5P1MZ4J9M"
};
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const storage = firebase.storage();

export {
    storage, firebase
}