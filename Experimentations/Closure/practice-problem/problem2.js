// ⚙️ Level 2 — Working with data and custom steps
// 5. Write a function makeMultiplier(n) that returns a function which multiplies any given number by n.

function makeMultiplier(n) {
    return function(num) {
        return num*n;
    }
}
const double = makeMultiplier(2);
console.log(double(5)); // 10
console.log(double(10)); // 20


// 🧩 2️⃣ createCounterWithStep
// Write a function createCounterWithStep(start, step) that returns a function increasing by step each time it’s called.
console.log("================================\n");

function createCounterWithStep(start, step) {
    return function() {
        start += step;
        return start;
    }
}

const counter = createCounterWithStep(10, 5);
console.log(counter()); // 15
console.log(counter()); // 20
console.log(counter()); // 25


// 🧩 3️⃣ passwordManager
// Make a function passwordManager(password) that returns two functions:
// one to check if the password is correct (check)
// another to change it (update)
console.log("================================\n");


function passwordManager(p)  {
    let password = p;
    function check(che) {
        return password===che;
    }
    function update(up) {
        password = up;
    }
    return {check, update}
}

const manager = passwordManager("abc123");
console.log(manager.check("abc123")); // true
manager.update("xyz456");
console.log(manager.check("abc123")); // false
console.log(manager.check("xyz456")); // true


// 🧩 4️⃣ bankAccount
// Write a function bankAccount() that returns an object with:
// deposit(amount)
// withdraw(amount)
// getBalance()
// All three share a private balance variable (not directly accessible from outside).
console.log("================================\n");

function bankAccount() {
    let balance = 0;
    function deposit(amount) {
        balance+=amount;
    }
    function withdraw(amount) {
        balance-=amount;
    }
    function getBalance() {
        return balance
    }
    return {deposit, withdraw, getBalance}
}

const myAccount = bankAccount();
myAccount.deposit(100);
myAccount.withdraw(30);
console.log(myAccount.getBalance()); // 70


// 🧩 5️⃣ createArrayLogger
// Write a function that stores all inputs in an internal array and returns the entire array each time you call it.
console.log("================================\n");

function createArrayLogger() {
    const arr = [];
    return function log(num) {
        arr.push(num);
        return arr;
    }
}
const log = createArrayLogger();
console.log(log(10)); // [10]
console.log(log(20)); // [10, 20]
console.log(log(5));  // [10, 20, 5]


// 💡 Bonus (for deeper understanding)
// 6️⃣ once(fn)
// Write a function once(fn) that allows the passed function to run only once.
// Subsequent calls should do nothing.
console.log("================================\n");

function greet(...args) {
  console.log("Hello!", msg);
}

function once(fn) {
    let called = false;
    return function(...args) {
        if(!called) {
            called = true;
            return fn(...args);
        } 
    }
}

const sayHiOnce = once(greet);
sayHiOnce("Amarjeet"); // "Hello!"
sayHiOnce(); // nothing happens
sayHiOnce(); // nothing happens
