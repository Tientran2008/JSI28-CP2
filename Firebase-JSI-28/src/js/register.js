// DOM
const registerForm = document.querySelector(".register-form")
const fullname = document.querySelector(".fullname")
const email = document.querySelector(".email")
const dob = document.querySelector(".dob")
const password = document.querySelector(".password")
const passworConfirm = document.querySelector(".password-confirm")

// Handle register
const handleRegister = () => {
    // Get value input

    const fullname = fullname.value;
    const email = email.value;
    const dob = dob.value;
    const password = password.value;
    const passwordConfirm = passworConfirm.value;

    // Check value
    if (!fullname || !email || !dob || !password || !passworConfirm) {
        alert("Please fill all fields");
        return;
    }

    // Regex email js
    // validate

    if (password !== passworConfirm) {
        alert("Please fill all fields")
        return;
    }

}

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });



