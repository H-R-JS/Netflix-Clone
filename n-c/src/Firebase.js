import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwdoWRg5YJKAbZkrZBfYqWxpu1kxelXrA", //process.env.REACT_APP_FIREBASE_API_KEY, //,
  authDomain: "netflix-clone-28bfb.firebaseapp.com",
  projectId: "netflix-clone-28bfb",
  storageBucket: "netflix-clone-28bfb.appspot.com",
  messagingSenderId: "522040742417",
  appId: "1:522040742417:web:fdb79352eb1a95b876d7b0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
