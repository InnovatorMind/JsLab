import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.post("/upload", (req, res) => {
  console.log(req.body);
  res.send("Form received!");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
