Currying is a powerful concept in JavaScript (and functional programming in general) that transforms a function with **multiple arguments** into a sequence of **functions that each take one argument**.

---

### 🧠 What Is Currying?

Instead of writing a function like this:

```js
function add(a, b) {
  return a + b;
}
```

You curry it like this:

```js
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}
```

Now you can use it like:

```js
const add5 = curriedAdd(5);
console.log(add5(3)); // 8
```

> ✅ You’ve partially applied the first argument (`a = 5`) and created a reusable function.

---

### 🧩 Why Is Currying Useful?

- **Partial application**: Pre-fill some arguments and reuse the function.
- **Composability**: Build pipelines of small, focused functions.
- **Cleaner code**: Avoid repetition and improve readability.

---

### 🔧 Real-World Example: Logging Utility

```js
function createLogger(level) {
  return function(message) {
    console.log(`[${level}] ${message}`);
  };
}

const info = createLogger('INFO');
const error = createLogger('ERROR');

info('Server started');   // [INFO] Server started
error('Something broke'); // [ERROR] Something broke
```

> 🎯 You’ve created specialized loggers using currying.

---

### 🧪 Bonus: Generic Curry Function

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...next) => curried(...args, ...next);
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // 24
```

---