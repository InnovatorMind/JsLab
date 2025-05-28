import express from "express";

const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

app.post("/upload", (req, res) => {
  console.log(req.body); // 👈 Access form data here

  const { username, age } = req.body;
  res.end(`Hello ${username}, you are ${age} years old.`);
});

app.listen(4000, () => {
  console.log(`Server running at http://localhost:4000`);
});
