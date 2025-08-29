// 2️⃣ Watching a Folder for Changes
// Want to automatically detect when a file or folder is created, modified, or deleted? Use fs.watch()

import fs from 'fs';

fs.watch('./images', (eventType, filename) => {
    console.log(`Change detected: ${eventType} on ${filename}`);
});
