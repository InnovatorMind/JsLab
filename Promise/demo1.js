// Chaining Promises

const { setTimeout: delay } = require('node:timers/promises');

delay(1000).then(() => {
  console.log('🛏️ Woke up… sorta.');
  return delay(1000).then(() => '☕ Making coffee...');
}).then(result => {
  console.log(result);
  return delay(1000).then(() => '📺 Watching cat videos instead of working');
}).then(result => {
  console.log(result);
  return delay(1000).then(() => '💡 Sudden burst of motivation!');
}).then(result => {
  console.log(result);
  return delay(1000).then(() => '💻 Coded for 3 minutes. Now snack break.');
}).then(result => {
  console.log(result);
  return delay(1000).then(() => {
    throw new Error('🔥 Microwave exploded. Coding postponed.');
  });
}).then(result => {
  console.log(result);
}).catch(err => {
  console.error(`⚠️ Oops: ${err.message}`);
});
