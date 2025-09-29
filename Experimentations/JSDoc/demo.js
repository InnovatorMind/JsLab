// @ts-check

// Example 1: Function with JSDoc types
/*
/**
 * Multiplies two numbers.
 * @param {number} x - First number
 * @param {number} y - Second number
 * @returns {number} The product of x and y
 */

// function multiply(x, y) {
//   return x * y;
// }

// multiply(2, 3);     // ✅ works fine
// multiply(3, "3"); // ❌ VS Code will warn you (wrong types!)


// Example 2: Objects
/*
/**
 * @typedef {Object} User
 * @property {string} name - The user's name
 * @property {number} age - The user's age
 */

/*
/**
 * Prints user info.
 * @param {User} user - The user object
 */
// function printUser(user) {
//   console.log(`${user.name} is ${user.age} years old.`);
// }

// printUser({ name: "Alice", age: 22 });  // ✅ correct
// printUser({ name: "Bob" });             // ❌ VS Code warns: age missing


// Example 3: Async / Promise return
/*
/**
 * Fetches data from an API.
 * @returns {Promise<string>} A promise that resolves to a string
 */
// async function getData() {
//   return "Hello from API!";
// }

// getData().then(console.log);


// Example 4: Class
/**
 * Represents a rectangle.
 */
class Rectangle {
  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  /**
   * Get the area of the rectangle.
   * @returns {number}
   */
  area() {
    return this.width * this.height;
  }
}