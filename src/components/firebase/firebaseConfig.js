import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBPPw-YvLTsd0_pn5ae1qTJG50dYXZ61Q4",
  authDomain: "finalprojectlogos.firebaseapp.com",
  projectId: "finalprojectlogos",
  storageBucket: "finalprojectlogos.appspot.com",
  messagingSenderId: "644263533231",
  appId: "1:644263533231:web:6a47d3ec229a6e495c125a"
};

const app = initializeApp(firebaseConfig);
export default getFirestore();