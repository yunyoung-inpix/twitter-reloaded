import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnUcyFQYtUNHdOrsG9NhjOYJdenm2KhnE",
  authDomain: "twitter-reloaded-982c9.firebaseapp.com",
  projectId: "twitter-reloaded-982c9",
  storageBucket: "twitter-reloaded-982c9.appspot.com",
  messagingSenderId: "931422434354",
  appId: "1:931422434354:web:c83d73eecdd3cf7932382b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
