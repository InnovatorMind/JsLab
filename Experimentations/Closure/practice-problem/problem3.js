// Q1. Private Counter
// Create a function createCounter(start) that:
// Starts counting from the given start value.
// Returns an object with two methods:
// increment() → increases count by 1 and returns it
// decrement() → decreases count by 1 and returns it

function createCounter(start) {
    function increment() {
        return ++start;
    }
    function decrement() {
        return --start;
    }

    return {increment, decrement}
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6

// ===================================================

// Q2. Multiplier Factory
// Write a function makeMultiplier(factor) that returns a function.
// The returned function takes a number and multiplies it by factor.
console.log("================================\n");


function makeMultiplier(mul) {
    return function (num) {
        return mul*num;
    }
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5)); // 10
console.log(triple(4)); // 12



// Q3. Remember Last
// Create a function rememberLast() that returns another function.
// Each time you call the inner function with a value, it should print both:
// the current value
// the previous value (if any)
console.log("================================\n");


function rememberLast() {
    let prevVal = "none";
    return function(current) {
        console.log(`current: ${current}, previous: ${prevVal}`)
        prevVal = current;
    }
}

const remember = rememberLast();
remember("apple");  // current: apple, previous: none
remember("banana"); // current: banana, previous: apple
remember("cherry"); // current: cherry, previous: banana


// Q4. Limited Counter
// Write a function limitedCounter(limit) that:
// Starts from 0
// Increments by 1 on each call
// Stops increasing after reaching the given limit, but keeps returning the last value
console.log("================================\n");

function limitedCounter(n) {
    let count = 0;
    return function() {
        if(count < n) {
            count++;
        }
        return count;
    }
}

const count = limitedCounter(3);
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log(count()); // 3 (stops here)


// Q5. Cached Addition
// Create a function cachedAdd() that:
// Returns a function add(a, b)
// Caches the result for the same pair (a, b) to avoid recomputation
console.log("================================\n");


function cachedAdd() {
    let cachedA;
    let cachedB;
    let cachedResult;
    return function(a, b) {
        if(cachedA===a && cachedB ===b) return cachedResult;
        cachedA = a;
        cachedB = b;
        cachedResult = a+b;
        return cachedResult;
    }
}

const add = cachedAdd();
console.log(add(2, 3)); // computes and returns 5
console.log(add(2, 3)); // returns from cache
console.log(add(1, 4)); // computes and returns 5


// we can use object instead for more cache storage
const cache = {};
const key = `${a},${b}`;
if (cache[key]) return cache[key];
cache[key] = a + b;
