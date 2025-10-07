// 🧩 1. Primitive values (like number, string, boolean)
// function outer() {
//   let count = 0; // primitive
//   return function() {
//     count++;
//     return count;
//   };
// }

// const counter = outer();
// console.log(counter()); // 1
// console.log(counter()); // 2



// 🧩 2. Object values
// function outer() {
//   let user = { name: "Alice", age: 20 };
//   return function() {
//     user.age++;
//     return user;
//   };
// }

// const updateUser = outer();
// console.log(updateUser()); // { name: 'Alice', age: 21 }
// console.log(updateUser()); // { name: 'Alice', age: 22 }


// 🧩 3. Arrays
function outer() {
  let arr = [];
  return function(value) {
    arr.push(value);
    return arr;
  };
}

const addItem = outer();
console.log(addItem(10)); // [10]
console.log(addItem(20)); // [10, 20]


// 🧩 4. Functions
function outer() {
  const greet = () => "Hello!";
  return function() {
    return greet();
  };
}

const sayHello = outer();
console.log(sayHello()); // "Hello!"
