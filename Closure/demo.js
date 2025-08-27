function outer() {
    let count = 0; 

    function inner() {
        count++;
        return count;
    }

    return inner;
}

const counter = outer();
console.log(counter()); 
console.log(counter()); 
console.log(counter());


// function greet(name) {
//     return function() {
//         console.log(`Hello, ${name}`);
//     };
// }

// const greetAlice = greet("Alice");
// greetAlice(); // "Hello, Alice"
