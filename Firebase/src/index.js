import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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
const auth = getAuth();
const colRef = collection(db, "movies");
const qRef = query(
  colRef,
  where("category", "==", "comedy"),
  orderBy("createdAt")
);
const individualDoc = doc(db, "movies", "Yl7bMC8THHd83hKBkWKK");

getDoc(individualDoc)
  .then((data) => {
    console.log(data.data());
  })
  .catch((error) => {
    console.error("Error fetching document:", error);
  });
getDocs(qRef)
  .then((data) => {
    let movies = [];
    data.docs.forEach((doc) => {
      movies.push({ ...doc.data(), id: doc.id });
    });
    console.log("Comedy Movies:", movies);
  })
  .catch((error) => {
    console.error("Error fetching documents:", error);
  });

onSnapshot(colRef, (snapshot) => {
  let movies = [];
  snapshot.docs.forEach((doc) => {
    movies.push({ ...doc.data(), id: doc.id });
  });
  console.log("All Movies (Real-time):", movies);
});

const addForm = document.querySelector(".add");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    name: addForm.name.value,
    // description: addForm.description.value,
    category: addForm.category.value,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
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
      console.error("Error deleting document:", error);
    }
  } else {
    console.error("ID value is empty");
  }
});

const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const docRef = doc(db, "movies", updateForm.id.value);
  updateDoc(docRef, {
    name: updateForm.name.value,
    updatedAt: serverTimestamp(),
  }).then(() => {
    updateForm.reset();
  });
});

const registerForm = document.querySelector(".register");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(
    auth,
    registerForm.email.value,
    registerForm.password.value
  )
    .then((credentials) => {
      console.log(credentials);
      registerForm.reset();
    })
    .catch((error) => console.log(error));
});

const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit",e=>{
  e.preventDefault()
  signInWithEmailAndPassword(
    auth,
    loginForm.email.value,
    loginForm.password.value)
    .then((loginCred)=>{
      console.log("Welcome", loginCred.user.email)
      loginForm.reset()
    })
})

const logOutBtn = document.querySelector(".logout");
logOutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    console.log("User Logout");
  });
});
