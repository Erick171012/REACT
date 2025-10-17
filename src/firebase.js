  // src/firebase.js
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyCjT7fzw0ftjeeBrZTZFeSLLRKDd-Wn4gs",
    authDomain: "agenda-estudiantil-8876a.firebaseapp.com",
    projectId: "agenda-estudiantil-8876a",
    storageBucket: "agenda-estudiantil-8876a.appspot.com", // <- más estándar
    messagingSenderId: "164660758705",
    appId: "1:164660758705:web:35397b9652a1c8df68fa90",
  };

  // Inicializa Firebase
  const app = initializeApp(firebaseConfig);

  // Exporta autenticación y base de datos
  export const auth = getAuth(app);
  export const db = getFirestore(app);



