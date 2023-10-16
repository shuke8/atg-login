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

const signInForm = document.querySelector(".sign-in-form");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

signInForm.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent the default form submission

  const emailInput = document.querySelector(".sign-in-form input[type='text']");
  const passwordInput = document.querySelector(".sign-in-form input[type='password']");
  const email = emailInput.value;
  const password = passwordInput.value;

  // Use Firebase Authentication to check credentials
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    // Firebase authentication succeeded
    // Check allowedCredentials
    const allowedCredentials = [
      { email: "o.komilov@atg.uz", password: "1234567" },
      { email: "f.jalilov@atg.uz", password: "1234567" },
      { email: "m.rakhmanov@atg.uz", password: "1234567" },
    ];

    const validCredential = allowedCredentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (validCredential) {
      // Redirect to the specified URL for valid credentials
      window.location.href = "https://atg-manager.vercel.app/";
    } else {
      // Redirect to https://atg-engineer.vercel.app/ if Firebase is correct but not in allowedCredentials
      window.location.href = "https://atg-engineer.vercel.app/";
    }
  } catch (error) {
    // Handle Firebase authentication errors
    modalContent.innerHTML = "Authentication error. Please try again.";
    modal.style.display = "flex";
  }
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
