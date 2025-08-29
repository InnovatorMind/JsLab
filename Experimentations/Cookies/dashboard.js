function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === name) return value;
  }
  return null;
}

if (getCookie("isLoggedIn") !== "true") {
  window.location.href = "index.html";
}

const username = getCookie("username") || "User";
document.getElementById("welcome-msg").textContent = `Hello, ${username}!`;
document.getElementById(
  "username"
).textContent = `${username}`;

function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

function logout() {
  document.cookie =
    "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "index.html";
}
