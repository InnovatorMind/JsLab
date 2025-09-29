// console.log("hi")

// function greet() {}
// console.log(greet instanceof Function); // true

// const add = new Function("a", "b", "return a + b;");
// console.log(add(2, 3)); // 5

// const add = (a, b) => {
//     return a + b;
// }

// async function add(a, b) {
//   return a + b;
// }

// console.dir(add.name)
// console.log(add)


// let x = 10;
// const fn = new Function("x","return x;"); 
// console.log(fn(3)); // ❌ ReferenceError: x is not defined

// function normal() {
//   return x; // ✅ has closure
// }
// console.log(normal()); // 10

// Why?
// Functions created with new Function are always evaluated in the global scope.
// They don’t capture local variables (no closure).
// So x must be global if you want it to work:

globalThis.x = 10;  // works in browser (window.x) or Node (global.x)
const fn = new Function("return x;");
console.log(fn()); // 10



// ✅ How to “use the body” with new Function
// You pass the body as the last string argument:

// const greet = new Function("name", `
//   console.log("Hello " + name);
//   return "Done!";
// `);

// console.log(greet("Alice"));
// // Hello Alice
// // Done!