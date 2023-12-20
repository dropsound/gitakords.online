


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSyGIO1pfdZLo1zEIeQH42jxQiSeNIlys",
  authDomain: "gitarchords-97b42.firebaseapp.com",
  databaseURL: "https://gitarchords-97b42-default-rtdb.firebaseio.com",
  projectId: "gitarchords-97b42",
  storageBucket: "gitarchords-97b42.appspot.com",
  messagingSenderId: "716837870690",
  appId: "1:716837870690:web:65b1016e9e2a0bd785853b",
  measurementId: "G-RKVXFLN4DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBSyGIO1pfdZLo1zEIeQH42jxQiSeNIlys",
  authDomain: "gitarchords-97b42.firebaseapp.com",
  databaseURL: "https://gitarchords-97b42-default-rtdb.firebaseio.com",
  projectId: "gitarchords-97b42",
  storageBucket: "gitarchords-97b42.appspot.com",
  messagingSenderId: "716837870690",
  appId: "1:716837870690:web:65b1016e9e2a0bd785853b",
  measurementId: "G-RKVXFLN4DD"
  }
};
