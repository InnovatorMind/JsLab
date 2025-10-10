// function greet() {
//   console.log(this.name);
//   return 
// }
// greet.call({ name: "Anonymous" }); // prints "Anonymous"

// console.dir(greet)
// console.log(Object.getOwnPropertyNames(greet))        // own props
// console.log(Object.getOwnPropertyNames(Function.prototype)) // inherited props

// console.log(greet.constructor === Function); // true

// console.log(Function);

// function demo(a, b) {
//   console.log(arguments[0], arguments[1]); // a b
// }
// demo(10, 20);



// Javascript call method polyfill
/*
/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
// Function.prototype.myCall = function (thisArg, ...argArray) {
//   // throw 'Not implemented!';
//   if(typeof this !== 'function'){
//     throw new TypeError(this + " is not callable")

//   }
//   thisArg = (thisArg === undefined || thisArg === null)?globalThis:Object(thisArg);
//   const fn = Symbol();
//   thisArg[fn] = this;
//   const result = thisArg[fn](...argArray)
//   delete thisArg[fn];
//   return result;
// };






// function greet() {
//   console.log(this);
//   return "s";
// }
// Function.prototype.myCall = function () {
//     console.log(this)
//     return this;
// }

// console.dir(Function);
// const demo = new Function();
// console.log(demo.myCall())
// console.log(greet.prototype);
// const obj = new greet();
// console.log(obj.myCall())


// ======================================================================
// Javascript call method polyfill


/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  // throw 'Not implemented!';
  if(typeof this !== 'function'){
    throw new TypeError(this + " is not callable")

  }
  thisArg = (thisArg === undefined || thisArg === null)?globalThis:Object(thisArg);
  const fn = Symbol();
  thisArg[fn] = this;
  const result = thisArg[fn](...argArray)
  delete thisArg[fn];
  return result;
};


function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Alice" };

// Using your polyfill
console.log(greet.myCall(person, "Hello", "!"));
// → "Hello, Alice!"

console.dir(Symbol)
