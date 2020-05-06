import firebase from 'firebase'
//import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD_l4E93eWUVkvyYdl6SPGaaovGPOC6KC4",
    authDomain: "pratyaksha-project.firebaseapp.com",
    databaseURL: "https://pratyaksha-project.firebaseio.com",
    projectId: "pratyaksha-project",
    storageBucket: "pratyaksha-project.appspot.com",
    messagingSenderId: "22545935141",
    appId: "1:22545935141:web:513822eb3f77cf1ed388cc",
    measurementId: "G-JL4RH13SZD"
  };
    
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //export firestore database
  export default firebaseApp.firestore()