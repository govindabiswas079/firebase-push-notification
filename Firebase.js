// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmR5SLvTeK-vAVBMDaRRt2sVUHh-wW90Y",
  authDomain: "reactpushnotification-c3e08.firebaseapp.com",
  projectId: "reactpushnotification-c3e08",
  storageBucket: "reactpushnotification-c3e08.appspot.com",
  messagingSenderId: "326366891738",
  appId: "1:326366891738:web:291ac5a982f6992f339fe3",
  measurementId: "G-83F48TZF62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
