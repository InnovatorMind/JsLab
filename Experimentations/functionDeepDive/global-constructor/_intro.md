
---

## 🔹 What is `Function` in JS?

* It’s a **built-in global constructor** in JavaScript.
* Every function you create (`function greet() {}` or `const f = () => {}`) is actually an **instance of `Function`**.
* In other words:

  ```js
  function greet() {}
  console.log(greet instanceof Function); // true
  ```

---

## 🔹 Using the `Function` constructor

You can actually create new functions at runtime with it:

```js
const add = new Function("a", "b", "return a + b;");
console.log(add(2, 3)); // 5
```

* The first arguments are parameter names (`"a"`, `"b"`)
* The last argument is the function body (`"return a + b;"`)

So `new Function("a", "b", "return a + b;")` is equivalent to:

```js
function add(a, b) {
  return a + b;
}
```

---

## 🔹 Why is it special?

* **All functions in JS come from `Function`**.

  ```js
  function greet() {}
  const arrow = () => {};
  async function test() {}

  console.log(greet.constructor === Function); // true
  console.log(arrow.constructor === Function); // true
  console.log(test.constructor === Function);  // true
  ```
* It’s like the “master blueprint” of all functions.

---

## ⚠️ Caveats

* Functions created with `new Function(...)` are always created in the **global scope**.
* They don’t have closure access to local variables. Example:

```js
let x = 10;
const fn = new Function("return x;"); 
console.log(fn()); // ❌ ReferenceError: x is not defined
```

But:

```js
function normal() {
  return x; // ✅ has closure
}
console.log(normal()); // 10
```

That’s why **`Function` constructor is rarely used in practice** (only in metaprogramming, dynamic code generation, etc.).

---

## 🔹 `Function` constructor (no closure)

```js
let x = 10;
const fn = new Function("return x;");
console.log(fn()); // ❌ ReferenceError: x is not defined
```

Why?

* Functions created with `new Function` are always evaluated in the **global scope**.
* They **don’t capture local variables** (no closure).
* So `x` must be global if you want it to work:

```js
globalThis.x = 10;  // works in browser (window.x) or Node (global.x)
const fn = new Function("return x;");
console.log(fn()); // 10
```

---

## ✅ How to “use the body” with `new Function`

You pass the body as the **last string argument**:

```js
const greet = new Function("name", `
  console.log("Hello " + name);
  return "Done!";
`);

console.log(greet("Alice"));
// Hello Alice
// Done!
```

So you can write multiple statements inside the string.

---

⚠️ But in real-world code, **`new Function` is rarely used** (only in dynamic compilers, interpreters, template engines, etc.), because:

* It loses closures
* It runs code from strings (like `eval`) → can be unsafe
* Harder to debug

---

👉 Do you want me to also show you **how `new Function` is basically like a safer `eval`**, and when people actually use it in real apps?
