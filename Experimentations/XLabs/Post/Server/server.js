
import express from 'express'
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors()); // Enable CORS for all requests
app.use(express.json());


app.get('/', (req, res) => {
    // res.send("helo");
    res.end("Hey how's going everything!!!");
})

// app.post('/', (req, res) => {
//     // console.log(req.body); // JSON is automatically parsed!
//     console.log(req.params);
//     res.json({ data: "sent successfully" });
// });

app.post('/', (req, res) => {
    const fileName = req.headers['x-file-name'] || 'uploaded_file.bin'; // Extract filename from headers
    const filePath = path.join(__dirname, 'uploads', fileName); // Save in "uploads" folder

    // Create a writable stream to save the file
    const fileStream = fs.createWriteStream(filePath);
    req.pipe(fileStream);

    req.on('end', () => {
        console.log(`File ${fileName} saved successfully.`);
        res.json({ message: "File uploaded successfully!" });
    });

    req.on('error', (err) => {
        console.error("Upload Error:", err);
        res.status(500).json({ error: "File upload failed" });
    });
});


app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})