
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRDocksiC0LKNYjwGe2p5Eoh-gW_N-_f0",
  authDomain: "photofolio-my01.firebaseapp.com",
  projectId: "photofolio-my01",
  storageBucket: "photofolio-my01.appspot.com",
  messagingSenderId: "453427219275",
  appId: "1:453427219275:web:4215fe0a6ed09d92a736ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };