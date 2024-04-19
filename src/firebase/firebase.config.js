// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('inside firebase config', import.meta.env.VITE_PASS)

const firebaseConfig = {
  apiKey: "AIzaSyAlhkV1cdfdzaifGHVDcQUbz7ZXRZWUfmc",
  authDomain: "fir-first-project-hosting.firebaseapp.com",
  projectId: "fir-first-project-hosting",
  storageBucket: "fir-first-project-hosting.appspot.com",
  messagingSenderId: "645885698068",
  appId: "1:645885698068:web:1f2d3ac27f9e4668044701"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;