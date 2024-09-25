import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBab5yyESvABX735reITZG0PMp5XwhRB9o",
  authDomain: "mentorconnect-ee885.firebaseapp.com",
  projectId: "mentorconnect-ee885",
  storageBucket: "mentorconnect-ee885.appspot.com",
  messagingSenderId: "1041503380218",
  appId: "1:1041503380218:web:44f765028c67a73be6df43",
  measurementId: "G-PFV038H8RF"
};

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);