import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBtEZmbAlyrRZJLXV9GJX3lHzI-xPauwCQ",
  authDomain: "notnotion-bff1b.firebaseapp.com",
  projectId: "notnotion-bff1b",
  storageBucket: "notnotion-bff1b.appspot.com",
  messagingSenderId: "1073515414571",
  appId: "1:1073515414571:web:c1fb9ee1a67372b7b1966e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "movies");
getDocs(colRef)
  .then((data) => {
    let movies = [];
    data.docs.forEach((doc) => {
      movies.push({ ...doc.data(), id: doc.id });
    });
    console.log(movies);
  })
  .catch((error) => {
    console.log(error);
  });
const addForm = document.querySelector(".add");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    name: addForm.name.value,
    description: addForm.description.value,
  }).then(() => {
    addForm.reset();
  });
});
const delForm = document.querySelector(".delete");
delForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const idInput = delForm.querySelector("input[name='id']");
  const idValue = idInput.value.trim(); 
  if (idValue) {
    try {
      const docRef = doc(db, "movies", idValue);
      await deleteDoc(docRef);
      delForm.reset(); 
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  } else {
    console.error("ID value is empty");
  }
});
