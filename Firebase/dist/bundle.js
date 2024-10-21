/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyBtEZmbAlyrRZJLXV9GJX3lHzI-xPauwCQ\",\r\n  authDomain: \"notnotion-bff1b.firebaseapp.com\",\r\n  projectId: \"notnotion-bff1b\",\r\n  storageBucket: \"notnotion-bff1b.appspot.com\",\r\n  messagingSenderId: \"1073515414571\",\r\n  appId: \"1:1073515414571:web:c1fb9ee1a67372b7b1966e\",\r\n};\r\n\r\nconst app = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig);\r\nconst db = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\nconst auth = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\nconst colRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"movies\");\r\nconst qRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\r\n  colRef,\r\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"category\", \"==\", \"comedy\"),\r\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"createdAt\")\r\n);\r\nconst individualDoc = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"movies\", \"Yl7bMC8THHd83hKBkWKK\");\r\n\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(individualDoc)\r\n  .then((data) => {\r\n    console.log(data.data());\r\n  })\r\n  .catch((error) => {\r\n    console.error(\"Error fetching document:\", error);\r\n  });\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(qRef)\r\n  .then((data) => {\r\n    let movies = [];\r\n    data.docs.forEach((doc) => {\r\n      movies.push({ ...doc.data(), id: doc.id });\r\n    });\r\n    console.log(\"Comedy Movies:\", movies);\r\n  })\r\n  .catch((error) => {\r\n    console.error(\"Error fetching documents:\", error);\r\n  });\r\n\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(colRef, (snapshot) => {\r\n  let movies = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    movies.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  console.log(\"All Movies (Real-time):\", movies);\r\n});\r\n\r\nconst addForm = document.querySelector(\".add\");\r\naddForm.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(colRef, {\r\n    name: addForm.name.value,\r\n    // description: addForm.description.value,\r\n    category: addForm.category.value,\r\n    createdAt: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),\r\n    updatedAt: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),\r\n  }).then(() => {\r\n    addForm.reset();\r\n  });\r\n});\r\n\r\nconst delForm = document.querySelector(\".delete\");\r\ndelForm.addEventListener(\"submit\", async (e) => {\r\n  e.preventDefault();\r\n  const idInput = delForm.querySelector(\"input[name='id']\");\r\n  const idValue = idInput.value.trim();\r\n  if (idValue) {\r\n    try {\r\n      const docRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"movies\", idValue);\r\n      await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(docRef);\r\n      delForm.reset();\r\n    } catch (error) {\r\n      console.error(\"Error deleting document:\", error);\r\n    }\r\n  } else {\r\n    console.error(\"ID value is empty\");\r\n  }\r\n});\r\n\r\nconst updateForm = document.querySelector(\".update\");\r\nupdateForm.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  const docRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, \"movies\", updateForm.id.value);\r\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(docRef, {\r\n    name: updateForm.name.value,\r\n    updatedAt: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),\r\n  }).then(() => {\r\n    updateForm.reset();\r\n  });\r\n});\r\n\r\nconst registerForm = document.querySelector(\".register\");\r\n\r\nregisterForm.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\r\n    auth,\r\n    registerForm.email.value,\r\n    registerForm.password.value\r\n  )\r\n    .then((credentials) => {\r\n      console.log(credentials);\r\n      registerForm.reset();\r\n    })\r\n    .catch((error) => console.log(error));\r\n});\r\n\r\nconst loginForm = document.querySelector(\".login\");\r\nloginForm.addEventListener(\"submit\",e=>{\r\n  e.preventDefault()\r\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\r\n    auth,\r\n    loginForm.email.value,\r\n    loginForm.password.value)\r\n    .then((loginCred)=>{\r\n      console.log(\"Welcome\", loginCred.user.email)\r\n      loginForm.reset()\r\n    })\r\n})\r\n\r\nconst logOutBtn = document.querySelector(\".logout\");\r\nlogOutBtn.addEventListener(\"click\", () => {\r\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth).then(() => {\r\n    console.log(\"User Logout\");\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://firebase/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;