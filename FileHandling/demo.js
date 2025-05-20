import fs from 'fs/promises';

async function readFolder(folderPath) {
    try {
        const files = await fs.readdir(folderPath);
        console.log(folderPath)
        // console.log("Files:", files);
        const stats = await fs.stat(`${folderPath}/${files[0]}`)
        // const stats = await fs.stat(files[0]);
        console.log(stats.isFile()); 
        console.log(stats.isDirectory()); 
    } catch (error) {
        console.error("Error reading folder:", error);
    }
}

readFolder("./images");


// async function checkFileStats(filePath) {
//     try {
//         const stats = await fs.stat(filePath);
//         console.log(`Stats for ${filePath}:`, stats);
//         console.log(`Is it a file?`, stats.isFile());
//         console.log(`Is it a directory?`, stats.isDirectory());
//     } catch (error) {
//         console.error("Error reading stats:", error);
//     }
// }

// checkFileStats("./images/green.png");
