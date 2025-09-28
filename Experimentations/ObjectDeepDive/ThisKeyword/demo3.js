// Using "this" in object literal
// Here the function makeUser returns an object.
// What is the result of accessing its ref? Why?

// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }

// let user = makeUser();

// alert(user.ref.name); // What's the result?

// ============================================================================================

// Create a calculator
// Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },

//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


// ===============================================================================

// Chaining
// There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

ladder.up().up().up().down().showStep().down().showStep(); 