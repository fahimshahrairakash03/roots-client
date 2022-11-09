// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  // apiKey: "AIzaSyDVqZAvaGsFnqKn6Wv1poG8bwJGeze3wr0",
  // authDomain: "project-roots-1f819.firebaseapp.com",
  // projectId: "project-roots-1f819",
  // storageBucket: "project-roots-1f819.appspot.com",
  // messagingSenderId: "395410906982",
  // appId: "1:395410906982:web:ab45bfc31c26ac3b18b2a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
