import express from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    // const id = crypto.randomUUID();
    const extension = path.extname(file.originalname);
    // file.id = id;
    // cb(null, `${id}${extension}`);
    cb(null, `${file.fieldname}${extension}`);
  },
});

const upload = multer({ storage });

const app = express();
const PORT = 4000;

app.post("/upload", upload.single('profilePic'), (req, res) => {
  req.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  console.log(req.body);
  console.log(req.file);

  res.json({ message: "Data Sent!" });
//   req.on("end", () => {
//   });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
