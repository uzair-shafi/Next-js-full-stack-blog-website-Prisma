// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE,
  authDomain: "blog-408415.firebaseapp.com",
  projectId: "blog-408415",
  storageBucket: "blog-408415.appspot.com",
  messagingSenderId: "655886990824",
  appId: "1:655886990824:web:29063ec0f4424fb37f385d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);