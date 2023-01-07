import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsBVjl8_IeCZXYWnf8qtuvQzp3UEIEYm4",
  authDomain: "baatein---chat-app.firebaseapp.com",
  projectId: "baatein---chat-app",
  storageBucket: "baatein---chat-app.appspot.com",
  messagingSenderId: "793582052427",
  appId: "1:793582052427:web:837c59d5334155380719ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();