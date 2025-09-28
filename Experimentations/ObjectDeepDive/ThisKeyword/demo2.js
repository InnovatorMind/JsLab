
// Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log(user.name); // "user" instead of "this"
//   }

// };
// user.sayHi()


// …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.
// That’s demonstrated below:
// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log( user.name ); // leads to an error
//   }

// };

// let admin = user;
// user = null; // overwrite to make things obvious
// admin.sayHi(); // TypeError: Cannot read property 'name' of null
// If we used this.name instead of user.name inside the alert, then the code would work.


// “this” is not bound
// In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.

// There’s no syntax error in the following example:
// function sayHi() {
//   console.log( this );
// }
// sayHi()


// Arrow functions have no “this”
// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
// For instance, here arrow() uses this from the outer user.sayHi() method:

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
// That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context. 
