// Promise-based Node.js APIs
//  the fs (file system) module has a Promise-based API under fs.promises

import { readFile, writeFile } from 'fs/promises';

// const readWriteExample = async () => {
  try {
    const data = await readFile('demo3.txt', 'utf-8');
    console.log('📖 File read complete:', data);

    const transformed = data.toUpperCase();
    await writeFile('output.txt', transformed);
    console.log('💾 File written to output.txt');
  } catch (err) {
    console.error('⚠️ File error:', err.message);
  }
// };

// readWriteExample();

