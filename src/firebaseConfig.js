import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY3MtSU9wyAFnqnwh-UwBarWLlvZlA0To",
  authDomain: "blog-app-d4bc1.firebaseapp.com",
  projectId: "blog-app-d4bc1",
  storageBucket: "blog-app-d4bc1.appspot.com",
  messagingSenderId: "94334090361",
  appId: "1:94334090361:web:b07baee8b85829bd91e8a8",
  measurementId: "G-MPRS9XPZDQ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
