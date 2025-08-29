// 10. Real-World Use: JSON Manipulation
// JSON is just a stringified version of objects:

// Convert an object to JSON:


// const obj = { name: "John", age: 30 };
// console.log(obj);

// const json = JSON.stringify(obj);
// console.log(json); // Output: '{"name":"John","age":30}'


// const parsed = JSON.parse(json);
// console.log(parsed); // Output: John

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// async function fetchTodo() {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       const json = await response.json();
//       console.log(json);
// }
  
//   // Call the async function
// fetchTodo();
  
const jsonString = '{"name": "John", "age": 30}'; // JSON string
console.log(jsonString);
console.log(typeof(jsonString))

const parsedObject = JSON.parse(jsonString); // Parsing the string into an object

// console.log(parsedObject.age);  // Output: 30
// console.log(parsedObject.name); // Output: John
console.log(parsedObject); // Output: John
console.log(typeof(parsedObject))
