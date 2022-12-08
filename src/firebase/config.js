import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD0Ou_ApmwaO3hZ1kz6XF3ftkCJaVkEM9Y",
  authDomain: "login-page-f58b6.firebaseapp.com",
  projectId: "login-page-f58b6",
  storageBucket: "login-page-f58b6.appspot.com",
  messagingSenderId: "734125638146",
  appId: "1:734125638146:web:e762b72ad9eab9a2759d1b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}