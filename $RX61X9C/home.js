//////////////////////////////////////////////////////////////////////////// Import CHUNG

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

import {
  get,
  getDatabase,
  set,
  ref,
  onValue,
  update,
  remove,
  push,
  child,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSYnEdrRTEEFFhuWX-PcFgljEBL_G-xuE",
  authDomain: "jsi28-fe47b.firebaseapp.com",
  databaseURL: "https://jsi28-fe47b-default-rtdb.firebaseio.com",
  projectId: "jsi28-fe47b",
  storageBucket: "jsi28-fe47b.appspot.com",
  messagingSenderId: "814956298867",
  appId: "1:814956298867:web:35dbfb58ff2c4e12316006",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// DOM
let user_data = localStorage.getItem("current_user_data");
let user_email_span = document.getElementById("email");
let user_uid_span = document.getElementById("uid");
let ol = document.querySelector("ol");

if (user_data == "") {
  user_email_span.innerText = "Chưa có";
  user_uid_span.innerText = "Chưa có";
} else {
  user_data = JSON.parse(user_data);
  // email
  user_email_span.innerText = user_data.user_email;
  // uid
  user_uid_span.innerText = user_data.user_uid;
}

let sign_btn = document.querySelector("button");
sign_btn.addEventListener("click", function () {
  localStorage.setItem("current_user_data", "");
  window.location.reload();
});

// Hàm Read
let read_full_user = document.getElementsByTagName("button"); // => Trả về 1 mảng
read_full_user[1].addEventListener("click", function () {
  onValue(ref(database, `users`), (snap) => {
    let data = snap.val();

    data = Object.entries(data);
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = `<b>${data[i][0]}</b> - <u>${data[i][1].username}</u>`;

      ol.appendChild(li);
    }
  });
});
