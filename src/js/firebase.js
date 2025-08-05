// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHOHdWZKtvrNwqa1Mf5XcrNGvi92_P1Uo",
  authDomain: "enlightening-path.firebaseapp.com",
  projectId: "enlightening-path",
  storageBucket: "enlightening-path.firebasestorage.app",
  messagingSenderId: "77236151886",
  appId: "1:77236151886:web:146dc43d36ad73ad42451f",
  measurementId: "G-HZ10SB9K47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
