import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD2X2pMlKfUS9ld7NP4i52OjgmsoRvXWig",
    authDomain: "clone-801c0.firebaseapp.com",
    projectId: "clone-801c0",
    storageBucket: "clone-801c0.appspot.com",
    messagingSenderId: "918377742414",
    appId: "1:918377742414:web:511981a68f28bfa4c1031f"
  };

   const firebaseApp =   firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth();
  export   default auth