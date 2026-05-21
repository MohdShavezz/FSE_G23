// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB8BCslrdkhv3yO7JXMG16O1Ubr5yTI1E",
  authDomain: "my-react-app-c8bc8.firebaseapp.com",
  projectId: "my-react-app-c8bc8",
  storageBucket: "my-react-app-c8bc8.firebasestorage.app",
  messagingSenderId: "1014290740741",
  appId: "1:1014290740741:web:6a99a971c0156188490e6c",
  measurementId: "G-HHYW25QNNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);