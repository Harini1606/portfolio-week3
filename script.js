document.getElementById("contactForm").addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("errorMsg");

  if (name === "") {
    error.innerText = "Name is required";
    error.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    error.innerText = "Enter a valid email";
    return;
  }

  if (message.length < 10) {
    error.innerText = "Message must be at least 10 characters";
    return;
  }

  error.style.color = "green";
  error.innerText = "Message sent successfully!";
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode"));
}

if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark-mode");
}
function toggleAbout() {
  const section = document.getElementById("about");
  section.style.display =
    section.style.display === "none" ? "block" : "none";
}
