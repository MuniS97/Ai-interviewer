import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCM1yhP2c2n17vfMxJXelRVc1xaNijMnWM",
  authDomain: "prepwise-e4406.firebaseapp.com",
  projectId: "prepwise-e4406",
  storageBucket: "prepwise-e4406.firebasestorage.app",
  messagingSenderId: "701240773412",
  appId: "1:701240773412:web:458f1d6105a270087001b1",
  measurementId: "G-GMBQL63QX2"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);