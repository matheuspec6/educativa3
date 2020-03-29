import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCxJJ5-NTje4Et9rj2tekx61PtVDei5zyk",
    authDomain: "educativa-fc7d8.firebaseapp.com",
    databaseURL: "https://educativa-fc7d8.firebaseio.com",
    projectId: "educativa-fc7d8",
    storageBucket: "educativa-fc7d8.appspot.com",
    messagingSenderId: "428173865211",
    appId: "1:428173865211:web:46328d25a7fc69d75fc05e",
    measurementId: "G-WN95FY9M11"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
