// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoqJcOvG7itm4s3xGv1IN3akRCN3J3LOs",
  authDomain: "brand-shop-39abd.firebaseapp.com",
  projectId: "brand-shop-39abd",
  storageBucket: "brand-shop-39abd.appspot.com",
  messagingSenderId: "1056012790268",
  appId: "1:1056012790268:web:792c9d623c27cce48dea79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth