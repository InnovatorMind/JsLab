// Merging Objects
// Combine multiple objects into one:

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 }; // Uses spread operator
console.log(merged); // Output: { a: 1, b: 3, c: 4 }
