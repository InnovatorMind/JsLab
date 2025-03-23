// 5. Freezing or Sealing Objects
// Prevent modifications to objects:

// Object.freeze(): Makes the object immutable (no changes allowed).

// Object.seal(): Prevents adding/removing properties but allows modifying existing ones.


const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // No effect
console.log(obj.a); // Output: 1


// Create a new object based on the frozen one
const unfrozenObj = { ...obj }; // Spread operator to clone the object
unfrozenObj.a = 2; // Modify the new object
console.log(unfrozenObj.a); // Output: 2