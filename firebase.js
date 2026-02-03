import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBH7Jpu4_MBl7MKJ9lz9V5I4p0fcsddPc",
  authDomain: "mk-link-shortener.firebaseapp.com",
  projectId: "mk-link-shortener",
  storageBucket: "mk-link-shortener.appspot.com",
  messagingSenderId: "168409013932",
  appId: "1:168409013932:web:28e0095f318dc7ad5d4909"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Make functions available globally
window.db = db;
window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;
window.updateDoc = updateDoc;
window.increment = increment;
