import express from "express";

const app = express();

app.post("/upload", (req, res) => {
  let body = "";

  // Collect the data chunks
  req.on("data", (chunk) => {
    body += chunk.toString(); // convert Buffer to string
  });

  req.on("end", () => {
    console.log(body); // 👉 username=Amarjeet&age=25
    res.end("Form received");
  });
});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});

// ✅ Convert to object manually
// const formData = {};
// body.split("&").forEach(pair => {
//   const [key, value] = pair.split("=");
//   formData[decodeURIComponent(key)] = decodeURIComponent(value);
// });

// console.log("Parsed formData:", formData);
