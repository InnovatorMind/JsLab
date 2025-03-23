// Check if a key exists in the object:

const charCount = {
  a: 1,
  b: 2,
  nested: {
    c: 3
  }
};

// Direct key lookup
console.log('a' in charCount); // Output: true
console.log('c' in charCount); // Output: false
console.log('c' in charCount.nested); // Output: true


// <-----------  Example2 --------------->

// const address = {
//   street: "123 Main St",
//   city: "Sample City",
//   country: {
//     name: "Sample Country",
//     code: "SC",
//     region: {
//       name: "Sample Region",
//       zone: "North"
//     }
//   }
// };


// // Example usage
// console.log("street" in address); // Output: true (direct key check)
// console.log("zone" in address); // Output: false (direct key check)
