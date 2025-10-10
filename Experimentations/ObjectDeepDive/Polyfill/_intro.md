Haha, I feel that late-night energy 🔥—but this code is actually a solid polyfill for JavaScript’s `Function.prototype.call` method. Let me break it down step by step so it’s not just a WTF moment:

---

### 🧠 What is `Function.prototype.call`?

In JavaScript, `call` lets you invoke a function with a specific `this` value and arguments. For example:

```js
function greet() {
  console.log(this.name);
}
greet.call({ name: "Anonymous" }); // prints "Anonymous"
```

---

### 🛠️ What this polyfill does

You're defining your own version of `call` called `myCall`. Here's what each part does:

```js
Function.prototype.myCall = function (thisArg, ...argArray) {
```
- You're adding `myCall` to all functions.
- `thisArg` is the object to bind as `this`.
- `argArray` is the list of arguments to pass to the function.

---

### 🔍 Step-by-step breakdown

```js
if (typeof this !== 'function') {
  throw new TypeError(this + " is not callable");
}
```
- Ensures that `myCall` is being used on a function. If not, it throws an error.

```js
thisArg = (thisArg === undefined || thisArg === null) ? globalThis : Object(thisArg);
```
- If `thisArg` is `null` or `undefined`, it defaults to `globalThis` (like `window` in browsers).
- Otherwise, it wraps primitives (like strings or numbers) into objects.

```js
const fn = Symbol();
thisArg[fn] = this;
```
- Creates a unique property name using `Symbol` to avoid collisions.
- Temporarily assigns the function (`this`) to `thisArg[fn]`.

```js
const result = thisArg[fn](...argArray);
delete thisArg[fn];
return result;
```
- Calls the function with the given arguments.
- Deletes the temporary property.
- Returns the result of the function call.

---

### ✅ Example usage

```js
function sayHi(age) {
  return `${this.name} is ${age} years old.`;
}

const person = { name: "Anonymous" };
console.log(sayHi.myCall(person, 25)); // "Anonymous is 25 years old."
```

---

Want to try building a polyfill for `apply` or `bind` next? Or maybe test this one with some edge cases?