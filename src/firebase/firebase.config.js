// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt2kTB356rDFJxc3C8vhDvC32CcPfzou8",
  authDomain: "summary-school.firebaseapp.com",
  projectId: "summary-school",
  storageBucket: "summary-school.appspot.com",
  messagingSenderId: "1079640312876",
  appId: "1:1079640312876:web:57807896c6f27001ba9589"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app