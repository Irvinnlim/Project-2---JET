import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWuSj3BlKMcp52RSpOsuCiwxMFRc4yV7I",
  authDomain: "jet-trading-app-12acb.firebaseapp.com",
  projectId: "jet-trading-app-12acb",
  storageBucket: "jet-trading-app-12acb.appspot.com",
  messagingSenderId: "258353656643",
  appId: "1:258353656643:web:a9dc36f70de64a4582b5f6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
