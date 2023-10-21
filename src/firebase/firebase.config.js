import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAxJOe6DBisUObQBuQM5S6nA6RHVdxIXA",
  authDomain: "car-genius-doctor.firebaseapp.com",
  projectId: "car-genius-doctor",
  storageBucket: "car-genius-doctor.appspot.com",
  messagingSenderId: "290338243659",
  appId: "1:290338243659:web:71790725a281ffb79ab9ce",
};

const app = initializeApp(firebaseConfig);
const auth = 