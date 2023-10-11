// Select the form element and modal
const signInForm = document.querySelector(".sign-in-form");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

// Add a form submit event listener
signInForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the entered email and password values
  const emailInput = document.querySelector(".sign-in-form input[type='text']");
  const passwordInput = document.querySelector(".sign-in-form input[type='password']");
  const email = emailInput.value;
  const password = passwordInput.value;

  // Check login credentials and redirect accordingly
  if (email === "o.komilov@atg.uz" && password === "1234567") {
    // Redirect to the first URL
    window.location.href = "https://final-atg.vercel.app/";
  } else if (email === "n.karimov@atg.uz" && password === "1234567") {
    // Redirect to the second URL
    window.location.href = "https://fin-atg-main.vercel.app/";
  } else {
    // Clear the input fields
    emailInput.value = "";
    passwordInput.value = "";

    // Display an error message in the modal
    modalContent.innerHTML = "Invalid email or password. Please try again.";
    modal.style.display = "flex";
  }
});

// Close the modal when clicked outside the modal content
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
