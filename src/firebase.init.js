// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaAZDucuWVuuRrxwB3y75jw1mIywCqfOg",
    authDomain: "fisino-8e4fa.firebaseapp.com",
    projectId: "fisino-8e4fa",
    storageBucket: "fisino-8e4fa.appspot.com",
    messagingSenderId: "184468630977",
    appId: "1:184468630977:web:4b1b555d7febe269265340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;