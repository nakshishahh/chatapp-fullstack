import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-Fi2aEiOqCQJVaqnzuF1ApyX7fBajdl4",
  authDomain: "lamadev-525c1.firebaseapp.com",
  projectId: "lamadev-525c1",
  storageBucket: "lamadev-525c1.appspot.com",
  messagingSenderId: "716088673619",
  appId: "1:716088673619:web:8b11487e61012d5aa30da6"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()