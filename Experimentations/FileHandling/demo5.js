// 3️⃣ Creating Nested Folders (recursive: true)
// If you want to automatically create parent directories, use the { recursive: true } option:

import fs from 'fs/promises';

async function createNestedFolders(folderPath) {
    try {
        await fs.mkdir(folderPath, { recursive: true });
        console.log(`Nested folder created: ${folderPath}`);
    } catch (error) {
        console.error("Error creating folder:", error);
    }
}

createNestedFolders('./images/subFolder');


