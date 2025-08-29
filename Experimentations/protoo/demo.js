// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// myObject.greet(); // Greetings from Madrid
// console.log(Object.getPrototypeOf(myObject)) // Object { }

// const lol = 3423.23;

// console.log("object")
// console.log(Object.prototype);

// =========================================== //
// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);


// ============================================ //
// const personPrototype = {
//   greet() {
//     console.log("hello!");
//   },
// };

// const carl = Object.create(personPrototype);
// carl.greet(); // hello!

//  ============================================ //
const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'
