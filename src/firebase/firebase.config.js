// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj9mA67Y8nMtMQOcbSrQpiJXXraLXp8dA",
  authDomain: "clean-community-bd.firebaseapp.com",
  projectId: "clean-community-bd",
  storageBucket: "clean-community-bd.firebasestorage.app",
  messagingSenderId: "808931339723",
  appId: "1:808931339723:web:624a5ff475d48025b91a4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;