document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = localStorage.getItem("loggedInUser");

  // Show/hide Profile & Support links based on login status
  document.getElementById("profileLink").style.display = loggedInUser
    ? "block"
    : "none";
  document.getElementById("supportLink").style.display = loggedInUser
    ? "block"
    : "none";
  document.getElementById("loginBtn").style.display = loggedInUser
    ? "none"
    : "block";
  document.getElementById("logoutBtn").style.display = loggedInUser
    ? "block"
    : "none";

  // Redirect if already logged in
  if (loggedInUser && window.location.pathname.includes("login")) {
    window.location.href = "index.html";
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetElement = document.getElementById(
      this.getAttribute("href").substring(1)
    );
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Registration Logic
document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    localStorage.setItem(
      "user",
      JSON.stringify({ username: newUsername, password: newPassword })
    );
    alert("Account Created! Please login.");
    window.location.href = "login.html";
  });

// Login Logic
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    username === storedUser.username &&
    password === storedUser.password
  ) {
    localStorage.setItem("loggedInUser", username);
    alert("Login Successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid Credentials");
  }
});

// Logout Logic
document.getElementById("logoutBtn")?.addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});
let orderSummary = document.getElementById("order-summary");
orderSummary.innerHTML = cart
  .map((item) => `<p>${item.item} - ₹${item.price}</p>`)
  .join("");
