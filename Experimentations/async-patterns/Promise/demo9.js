// Promise.all(iterable) allows non-promise “regular” values in iterable
// Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it’s passed to the resulting array “as is”.

// For instance, here the results are [1, 2, 3]:

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2,
  3
]).then(console.log); // 1, 2, 3
// So we are able to pass ready values to Promise.all where convenient.

// ================================================================================================

// Promise.allSettled
// A recent addition
// This is a recent addition to the language. Old browsers may need polyfills.
// Promise.all rejects as a whole if any promise rejects. That’s good for “all or nothing” cases, when we need all results successful to proceed: