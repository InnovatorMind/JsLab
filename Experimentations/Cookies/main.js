// Add this helper function to retrieve a cookie by name
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// On page load, check if the user is already logged in
document.addEventListener("DOMContentLoaded", function() {
  if (getCookie("isLoggedIn") === "true") {
    // The user is logged in, redirect them to the dashboard
    window.location.href = "dashboard.html";
  }
});

function switchForm(form) {
  document.getElementById("loginForm").classList.remove("active");
  document.getElementById("signupForm").classList.remove("active");
  if (form === "login") {
    document.getElementById("loginForm").classList.add("active");
  } else {
    document.getElementById("signupForm").classList.add("active");
  }
}

function setCookie(name, value, seconds) {
  const d = new Date();
  d.setTime(d.getTime() + seconds * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

function login() {
  const id = document.getElementById("loginId").value;
  const pass = document.getElementById("loginPassword").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (u) => (u.username === id || u.email === id) && u.password === pass
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user)); // store only current user separately
    setCookie("isLoggedIn", true, 1500);
    setCookie("username", user.username, 1500);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function signup() {
  const email = document.getElementById("signupEmail").value;
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((u) => u.email === email || u.username === username)) {
    alert("User already exists");
    return;
  }

  const newUser = { email, username, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser)); // store only current user separately
  setCookie("isLoggedIn", true, 1500);
  setCookie("username", username, 1500);
  window.location.href = "dashboard.html";
}
