import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyBK7hLrAqrLr7MntPk3hWsTylzH6MuZ5ZU",
  authDomain: "fart-fun.firebaseapp.com",
  projectId: "fart-fun",
  storageBucket: "fart-fun.appspot.com",
  messagingSenderId: "1061650271575",
  appId: "1:1061650271575:web:a1178431056190e3dd0212",
};

export const app: FirebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(app)

