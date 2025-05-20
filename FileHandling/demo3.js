// 3️⃣ Copying or Moving Files
// Want to organize files by moving or copying them?

import fs from 'fs/promises';

async function moveFile(source, destination) {
    try {
        await fs.rename(source, destination);
        console.log(`Moved: ${source} → ${destination}`);
    } catch (error) {
        console.error("Error moving file:", error);
    }
}

moveFile("./myFolder/old.txt", "./newFolder/new.txt"); // Move a file
