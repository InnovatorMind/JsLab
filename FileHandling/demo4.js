// 2️⃣ ES6 Async/Await Folder Creation
// For cleaner modern JavaScript, use fs.promiimport fs from 'fs/promises';
import fs from 'fs/promises'

async function createFolder(folderPath) {
    try {
        await fs.mkdir(folderPath);
        console.log(`Folder created: ${folderPath}`);
    } catch (error) {
        console.error("Error creating folder:", error);
    }
}

createFolder('./ima');

