const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // ⛔ prevent page reload

  const formData = new FormData(form);

  // Convert FormData to a URL-encoded string
  const formObject = Object.fromEntries(formData.entries());
  const formBody = new URLSearchParams(formObject).toString();

  const res = await fetch("http://localhost:4000/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", // ✅ Match Express config
    },
    body: formBody, // ✅ Send as a URL-encoded string
  });

  const result = await res.text();
  console.log("Server Response:", result);
});
