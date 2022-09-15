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

// // Initialize Firebase
