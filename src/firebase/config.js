import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBG4AojvipG3Ct8tj02gAjEvyT1H-f_nc8",
    authDomain: "thomas-firegram.firebaseapp.com",
    projectId: "thomas-firegram",
    storageBucket: "thomas-firegram.appspot.com",
    messagingSenderId: "339260395228",
    appId: "1:339260395228:web:8e5e0cb076fa8a3d04ae19"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };