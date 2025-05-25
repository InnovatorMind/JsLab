import express from "express";
import multer from "multer"

const app = express();
const PORT = 4000;
const upload = multer({ dest: 'uploads/' })

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/upload", upload.single('profilePic'), (req, res) => {
  req.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  console.log(req.body);
  console.log(req.file)

  res.json({ message: "Data Sent!" });
//   req.on("end", () => {
//   });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
