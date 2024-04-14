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
  apiKey: "AIzaSyA5CBsi9izMqFpLZWTv-PQ0tVKLet6x-Hk",
  authDomain: "jsi28-8960a.firebaseapp.com",
  databaseURL: "https://jsi28-8960a-default-rtdb.firebaseio.com",
  projectId: "jsi28-8960a",
  storageBucket: "jsi28-8960a.appspot.com",
  messagingSenderId: "408135418265",
  appId: "1:408135418265:web:6f3fa467a9af91199d1308",
  measurementId: "G-ERLF448QKH"
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
}
else {
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
let read_full_user = document.getElementById("read_full_user"); // => Trả về 1 mảng

// Read full user
read_full_user.addEventListener('click', () => {
  onValue(ref(database, `users`), (snap) => {
      let data = snap.val();
      data = Object.entries(data);
      ol.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
          let li = document.createElement("li");
          li.innerHTML = `<b>${data[i][0]}</b> - <u>${data[i][1].username}</u> <button class="edit-btn">Sửa</button>`;
          ol.appendChild(li);
      }
      editData();
  });
});

// Edit data
const editData = () => {
  let editBtn = document.getElementsByClassName("edit-btn");
  for (let i = 0; i < editBtn.length; i++) {
      editBtn[i].addEventListener("click", () => {
          // Prevent from rendering more than a time
          if (editBtn[i].nextSibling) {
              editBtn[i].nextSibling.remove();
          }
          else {
              let div = document.createElement("div");
              div.innerHTML = 
              `
              <input id = "age-input" placeholder="Enter age ?">
              <button class="save-btn">Save</button>
              `;
              editBtn[i].insertAdjacentElement("afterend", div);
          }
          // Find all elements don't have bottom line 
          for (let z = 0; z < editBtn.length; z++) {
              if (i != z) {
                  if (editBtn[z].nextSibling) {
                      editBtn[z].nextSibling.remove();
                  }
              }
          }
          // Save data
          saveData();
      })
  }
}
// Save data function
const saveData = () => {
  let saveBtn = document.getElementsByClassName("save-btn");
  for(let i = 0; i < saveBtn.length; i++){
      saveBtn[i].addEventListener("click", () => {
        let tempUID =
          saveBtn[i].parentElement.previousElementSibling.previousElementSibling
            .previousElementSibling.innerText;

          const ageInput = document.querySelector("#age-input");
          if(ageInput.value){
            updateData(tempUID, ageInput.value)
          }
      })
  }
}

function updateData(tempUID, ageInput) {
  update(ref(database, "users/" + tempUID), {
    age: ageInput.value,
  }).then( () => {
    alert("Update thành công")
    return;
  })
}






