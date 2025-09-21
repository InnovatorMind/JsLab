// A callback is a function that is passed as an argument to another function and is executed after some kind of event or operation completes. 
// It’s a way to make code asynchronous and modular, especially useful when dealing with tasks like network requests, timers, or user interactions.

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Anonymous", sayGoodbye);


// 🔄 Common Use Cases
// Asynchronous operations like:
// setTimeout(callback, delay)
// fetch(url).then(callback)


// Event listeners:
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Array methods:
[1, 2, 3].map(num => num * 2); // callback used in map


// 🧩 Why Use Callbacks?
// They allow non-blocking behavior (e.g., continue running code while waiting for a response).
// They help modularize logic (you can pass different callbacks for different behaviors).
// They’re foundational for Promises and async/await, which are modern ways to handle asynchronous code.



// 🔁 Callback Hell: The Problem
// When you nest multiple callbacks inside each other, especially for asynchronous tasks, your code can become deeply indented and hard to read:
doSomething(function(result1) {
  doSomethingElse(result1, function(result2) {
    doThirdThing(result2, function(result3) {
      // and so on...
    });
  });
});
// This is called callback hell or the pyramid of doom. It’s hard to maintain, debug, and scale.



// 🧪 Promises: The Solution
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It helps flatten the structure and improve readability.

// ✅ Callback version:
getData(function(data) {
  processData(data, function(result) {
    displayResult(result);
  });
});


// ✅ Promise version:
getData()
  .then(processData)
  .then(displayResult)
  .catch(error => console.error(error));
// Much cleaner, right?



// 🔮 async/await: The Modern Magic
// async/await is syntactic sugar over Promises. It lets you write asynchronous code that looks synchronous:
async function handleData() {
  try {
    const data = await getData();
    const result = await processData(data);
    displayResult(result);
  } catch (error) {
    console.error(error);
  }
}
// This is the most readable and maintainable way to handle async logic in modern JavaScript.