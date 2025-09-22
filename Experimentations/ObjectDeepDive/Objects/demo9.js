// 7. Dynamic Property Names
// Add or access keys dynamically:


const dynamicKey = "favoriteColor";
const person = { name: "Alice", [dynamicKey]: "blue" };
console.log(person.favoriteColor); // Output: blue