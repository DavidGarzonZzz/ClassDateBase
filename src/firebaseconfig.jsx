// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASa3mSy6S2ct5JW8oplwo23z5ymqTF66E",
    authDomain: "classdatebase.firebaseapp.com",
    projectId: "classdatebase",
    storageBucket: "classdatebase.firebasestorage.app",
    messagingSenderId: "606161619050",
    appId: "1:606161619050:web:9899f3e28105773b442213",
    measurementId: "G-8J9L280G6L"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };