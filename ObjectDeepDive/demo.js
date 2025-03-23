const charCount = {}; // Empty object

charCount['a'] = 1; // Adds the key 'a' with a value of 1
charCount['b'] = 3; // Adds the key 'b' with a value of 3
charCount[1] = 3; // Adds the key 'b' with a value of 3

console.log(charCount); // Output: { a: 1, b: 3 }

console.log(charCount['a']); // Output: 1

charCount['a'] = 5; // Changes 'a' value to 5
console.log(charCount); // Output: { a: 5, b: 3 }

console.log('a' in charCount); // Output: true
console.log('c' in charCount); // Output: false
