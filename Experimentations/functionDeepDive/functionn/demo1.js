// A higher-order function that returns a function 

// function outer() {
//   return function inner() {
//     console.log("Hello from the inner function!");
//   };
// }

// const result = outer(); // outer() returns the inner function
// result(); // calling the returned function



// ===================================================
function outer() {
  return function inner() {
    console.log("Hello from the inner function!");
  };
}

const result = outer(); // outer() returns the inner function
result(); // calling the returned function

