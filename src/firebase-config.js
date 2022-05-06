import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-AJd52RD77vsEBJ2zG-17hUQ74qS1V98",
    authDomain: "demoapp-35922.firebaseapp.com",
    projectId: "demoapp-35922",
    storageBucket: "demoapp-35922.appspot.com",
    messagingSenderId: "307537208645",
    appId: "1:307537208645:web:a856815d62cbf08d710a2c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
