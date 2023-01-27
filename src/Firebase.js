// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1P2-huY0Y53SgFoh_82WlvQsmB3cG9Zk",
  authDomain: "assignment-b2ec1.firebaseapp.com",
  projectId: "assignment-b2ec1",
  storageBucket: "assignment-b2ec1.appspot.com",
  messagingSenderId: "459208298954",
  appId: "1:459208298954:web:5e2a31d29c2f9ba96b7f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app) 

export {db , auth}