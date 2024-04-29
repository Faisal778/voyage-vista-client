// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl5900d3d3Ttodq4xDIBVqGK1ZbiQ8kAU",
  authDomain: "voyage-vista-78f0b.firebaseapp.com",
  projectId: "voyage-vista-78f0b",
  storageBucket: "voyage-vista-78f0b.appspot.com",
  messagingSenderId: "496743022314",
  appId: "1:496743022314:web:4617e3813e36bd0030e193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;