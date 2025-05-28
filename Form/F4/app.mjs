import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = {
  username: "testuser",
  password: "12345",
}; // Example credentials

app.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username, password)

  if (username === users.username && password === users.password) {
    res.json({ success: true, redirect: "dashboard.html" }); // ✅ Send redirect page
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
