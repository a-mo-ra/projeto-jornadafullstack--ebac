
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyAuLdb11fe2Cvu5p8_zni-oHg03uBrEaKI",
  authDomain: "projetoj-fullstack-ebac.firebaseapp.com",
  projectId: "projetoj-fullstack-ebac",
  storageBucket: "projetoj-fullstack-ebac.appspot.com",
  messagingSenderId: "722072084448",
  appId: "1:722072084448:web:caca9e3ef0063f17e25585",
  measurementId: "G-09NN22JRN6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db