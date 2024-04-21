// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASJUz_i8IdlkQxwR3SG8YN44EtaiAtmUg",
  authDomain: "jsi-28-spck.firebaseapp.com",
  projectId: "jsi-28-spck",
  storageBucket: "jsi-28-spck.appspot.com",
  messagingSenderId: "981111297708",
  appId: "1:981111297708:web:a6414dd466a698acd4b109",
  measurementId: "G-5BXVSWSY71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);