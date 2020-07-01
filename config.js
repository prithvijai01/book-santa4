import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAjh21Z67rgym_uoY0_3TGVAV4v3Gzgyo4",
  authDomain: "santa-book.firebaseapp.com",
  databaseURL: "https://santa-book.firebaseio.com",
  projectId: "santa-book",
  storageBucket: "santa-book.appspot.com",
  messagingSenderId: "1004240058305",
  appId: "1:1004240058305:web:416cc5b38e0ecd18692140"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
