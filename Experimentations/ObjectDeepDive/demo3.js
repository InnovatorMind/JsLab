// const person = {};
// person.name = "John"; // Add a key-value pair
// person.age = 30; // Add another
// console.log(person.name); // Access the value of "name"
// console.log(person.age); // Access the value of "age"


// console.log(person);

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021
  };
  
  for (let key in car) {
    console.log(`${key}: ${car[key]}`); // Prints key and value
  }
  