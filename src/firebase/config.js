import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDIWBC_BbrfzkfIWOyOeZAQWvdOii7K2Fc",
    authDomain: "mymoney-46e74.firebaseapp.com",
    projectId: "mymoney-46e74",
    storageBucket: "mymoney-46e74.appspot.com",
    messagingSenderId: "719520700637",
    appId: "1:719520700637:web:5e22cf4bbcc89af139a334"
  };

  //init firebase 
  firebase.initializeApp(firebaseConfig);

  // init services

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore , projectAuth , timestamp}
