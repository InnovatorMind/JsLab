
// 1. Global Context
// console.log(this); // In a browser, this refers to the window object


// 2. Inside an Object Method
// const user = {
//   name: "Anonymous",
//   greet() {
//     console.log(this); // 'this' refers to the user object
//   }
// };
// user.greet(); // Output: "Anonymous"


// 3. In a Regular Function
// 'use strict';
// function show() {
//   console.log(this); // In strict mode: undefined; otherwise: window
// }
// show();


// 4. Arrow Functions
// const user = {
//   name: "Anonymous",
//   greet: () => {
//     console.log(this.name); // 'this' is inherited from the outer scope
//   }
// };
// user.greet(); // Output: undefined (in most cases)


// // 5. In Event Listeners
// document.querySelector("button").addEventListener("click", function () {
//   console.log(this); // 'this' refers to the button element
// });

