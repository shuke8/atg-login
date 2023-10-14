// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAUquBmZdGKB3mhBFQsfHx0oABpRHeQEDE",
  authDomain: "atg-comments.firebaseapp.com",
  projectId: "atg-comments",
  storageBucket: "atg-comments.appspot.com",
  messagingSenderId: "157480976924",
  appId: "1:157480976924:web:15f1361d7682f656b6d5d9",
  measurementId: "G-PJDZNK19TX"
};

firebase.initializeApp(firebaseConfig);

const allowedCredentials = [
  { email: "o.komilov@atg.uz", password: "1234567" },
  { email: "f.jalilov@atg.uz", password: "1234567" },
  { email: "m.rakhmanov@atg.uz", password: "1234567" },
];

const signInForm = document.querySelector(".sign-in-form");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");


signInForm.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent the default form submission

  const emailInput = document.querySelector(".sign-in-form input[type='text']");
  const passwordInput = document.querySelector(".sign-in-form input[type='password']");
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    // Check if the email and password combination exists in allowedCredentials
    const validCredential = allowedCredentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (validCredential) {
      // Redirect to the specified URL for valid credentials
      window.location.href = "https://final-atg.vercel.app/";
    } else {
      // Redirect to another URL or handle it accordingly for invalid credentials
      window.location.href = "https://fin-atg-main.vercel.app/";
    }
  } catch (error) {
    modalContent.innerHTML = "Authentication error. Please try again.";
    modal.style.display = "flex";
  }
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
