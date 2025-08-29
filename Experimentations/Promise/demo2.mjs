// Refactored (clean) version with async/await chaining:

// const { setTimeout: delay } = require('node:timers/promises');
import { setTimeout as delay } from 'node:timers/promises';

// (async () => {
try {
  console.log('🛏️ Woke up… sorta.');

  let result = await delay(1000);
  console.log('☕ Making coffee...');

  result = await delay(1000);
  console.log('📺 Watching cat videos instead of working');

  result = await delay(1000);
  console.log('💡 Sudden burst of motivation!');

  result = await delay(1000);
  console.log('💻 Coded for 3 minutes. Now snack break.');

  result = await delay(1000);
  throw new Error('🔥 Microwave exploded. Coding postponed.');
} catch (err) {
  console.error(`⚠️ Oops: ${err.message}`);
}
// })();
