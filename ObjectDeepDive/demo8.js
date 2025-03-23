// 6. Cloning Objects
// Create a copy of an object:

const original = { a: 1, b: 2 };
const clone = { ...original }; // Shallow copy
console.log(clone); // Output: { a: 1, b: 2 }