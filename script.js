const correctPassword = "1510";

const passwordPage = document.getElementById("passwordPage");
const memoriesPage = document.getElementById("memoriesPage");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput.value === correctPassword) {
    passwordPage.classList.add("hidden");
    memoriesPage.classList.remove("hidden");
    window.scrollTo(0, 0);
  } else {
    errorMessage.classList.add("visible");
    passwordInput.value = "";
    passwordInput.focus();
  }
});