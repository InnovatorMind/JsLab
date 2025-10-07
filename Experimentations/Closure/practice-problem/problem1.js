// 🧩 Level 1 — Basics: Understanding scope and returning functions
// 1. Write a function makeAdder(x) that returns another function which adds x to its argument.
// const add5 = makeAdder(5);
// console.log(add5(3)); // should print 8


function makeAdder(n) {
    return function(m) {
        return n+=m;
    }
}

const add5 = makeAdder(5);
console.log(add5(3)); // 8
console.log(add5(3)); // 11
console.log(add5(3)); // 14
console.log(add5(3)); // 17


// 2. Create a function sayHello() that returns another function which logs "Hello World!" every time it’s called.
console.log("================================\n");

function sayHello() {
    return function() {
        // console.log(("Hello World"));
        return "Hello World";
    }
}
const damn = sayHello();
console.log(damn());

// You could simplify:
// const sayHello = () => () => "Hello World";




// 3. Write a function createMessage() that stores a string and returns a function that prints it later.
console.log("================================\n");

function createMessage(str) {
    return function() {
        return str;
    }
}

const obj1 = createMessage("abcdefghijkl");
console.log(obj1());


// 5. Write a function counter() that returns a function which increases a number by 1 each time it’s called.
console.log("================================\n");

function counter(n=0) {
    return function () {
        return n+=1;
    }
}

const count = counter(0);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log("================================\n");
