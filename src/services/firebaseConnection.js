import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyClfUJgAYk5DKbKakLZUrjP4EYx1i_mZIc",
    authDomain: "financasapp-3d5ae.firebaseapp.com",
    databaseURL: "https://financasapp-3d5ae.firebaseio.com",
    projectId: "financasapp-3d5ae",
    storageBucket: "financasapp-3d5ae.appspot.com",
    messagingSenderId: "499167338659",
    appId: "1:499167338659:web:390d772f40bc62afb01f16",
    measurementId: "G-QNCGF6HPH9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;