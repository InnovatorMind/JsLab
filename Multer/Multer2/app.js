// server.js
import express from 'express';
import multer from 'multer';

const app = express();
const port = 4000;

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // saves to 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // saves with original filename
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('profilePics'), (req, res) => {
  console.log(req.file); // Contains metadata about uploaded file
  res.send('File uploaded successfully!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
