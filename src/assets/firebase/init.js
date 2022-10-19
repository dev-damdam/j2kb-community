// eslint-disable-next-line
import { initializeApp } from "firebase/app";
// eslint-disable-next-line
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyASjxRmVI2dZAHVkWqHMJo7Ko_cxhzFMUk",
  authDomain: "j2kb-community.firebaseapp.com",
  databaseURL: "https://j2kb-community-default-rtdb.firebaseio.com",
  projectId: "j2kb-community",
  storageBucket: "j2kb-community.appspot.com",
  messagingSenderId: "884214678977",
  appId: "1:884214678977:web:3cf6cf578558aae2a69b40",
  measurementId: "G-TCD5XH9FR2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getAnalytics(app);
export default db;
