// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVqkmOekuoNZZPHlbNFQOFssv-i8A-ABI",
  authDomain: "small-business-dashboard-6584b.firebaseapp.com",
  projectId: "small-business-dashboard-6584b",
  storageBucket: "small-business-dashboard-6584b.firebasestorage.app",
  messagingSenderId: "663071571239",
  appId: "1:663071571239:web:fb54227ce99b486c793d02"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);