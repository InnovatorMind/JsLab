document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formObject = Object.fromEntries(formData.entries());

  const res = await fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });

  const result = await res.json();

  if (result.success) {
    window.location.href = result.redirect; // ✅ Redirect to the correct page
  } else {
    alert(result.message); // ⚠️ Show error message
  }
});
