// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8BCslrdkhv3yO7JXMG16O1Ur5yTI1E",
  authDomain: "my-react-app-c8b.firebaseapp.com",
  projectId: "my-react-app-c8bc8",
  storageBucket: "my-react-app-c8b.firebasestorage.app",
  messagingSenderId: "1014290740741",
  appId: "1:101290740741:web:6a99a971c015618840e6c",
  measurementId: "G-HYW25QNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);