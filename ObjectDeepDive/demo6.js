// 3. Object Methods
// You can create methods (functions inside objects) to define behaviors:


const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b; // Shorthand syntax
  }
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 7)); // Output: 3