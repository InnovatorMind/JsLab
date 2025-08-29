// 4️⃣ Checking If a Folder Exists Before Creating
// To prevent errors when creating a folder: 

import fs from 'fs/promises';

async function ensureFolderExists(folderPath) {
    try {
        await fs.access(folderPath); // Check if folder exists
        console.log("Folder already exists:", folderPath);
    } catch {
        await fs.mkdir(folderPath);
        console.log("Folder created successfully!");
    }
}

ensureFolderExists("./images");
