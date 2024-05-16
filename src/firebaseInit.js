// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDU9jIS1pyklZq9IjA3wPOX13UDJsSw3xk",
//     authDomain: "photofolio-71bd7.firebaseapp.com",
//     projectId: "photofolio-71bd7",
//     storageBucket: "photofolio-71bd7.appspot.com",
//     messagingSenderId: "762454084973",
//     appId: "1:762454084973:web:7c87d32e1fa173e3ccde64"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC837ddi4bMk5pfZSK3olNmQ9zuNl7xJlU",
  authDomain: "photofolio-bb4e4.firebaseapp.com",
  projectId: "photofolio-bb4e4",
  storageBucket: "photofolio-bb4e4.appspot.com",
  messagingSenderId: "430808495265",
  appId: "1:430808495265:web:93c778e6f23fa86f232ce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };