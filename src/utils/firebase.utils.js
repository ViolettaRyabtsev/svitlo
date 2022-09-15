import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// export const addCollectionsAndDocuments = async (collectionKey, emails) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);

//   const docRef = doc(collectionRef, emails.toLowerCase());

//   batch.set(docRef, emails);

//   await batch.commit();
//   console.log("done");
// };

const firebaseConfig = {
  apiKey: "AIzaSyCggIYbo_GRxL81gCS5Hi4eG6_S17Dnm8Y",

  authDomain: "svitlola.firebaseapp.com",

  projectId: "svitlola",

  storageBucket: "svitlola.appspot.com",

  messagingSenderId: "614151943611",

  appId: "1:614151943611:web:8bc6dcf405c119e578409e",

  measurementId: "G-Y51CD99TFX",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollectionsAndDocuments = async (collectionKey, email) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  const docRef = doc(collectionRef, email.emailBody.toLowerCase());
  batch.set(docRef, email);

  await batch.commit();
  console.log("done");
};

// // Initialize Firebase
