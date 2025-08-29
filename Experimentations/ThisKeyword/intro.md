In JavaScript, the `this` keyword refers to the **object that is executing the current function**. Its value depends on **how the function is called**, which can sometimes make it confusing.

Here’s a breakdown of how `this` behaves in different contexts:

---

### 1. **Global Context**

In the global scope (outside any function or object):

```js
console.log(this); 
// In browsers, this refers to the `window` object
```

---

### 2. **Inside a Regular Function**

```js
function show() {
  console.log(this);
}
show(); 
// In non-strict mode: refers to the global object (window in browsers)
// In strict mode: undefined
```

---

### 3. **Inside a Method (Object Function)**

```js
const person = {
  name: "Amarjeet",
  greet: function () {
    console.log(this.name);
  }
};
person.greet(); // "Amarjeet" because `this` refers to `person`
```

---

### 4. **Arrow Functions**

Arrow functions don’t have their own `this`. They inherit it from the **surrounding lexical scope**.

```js
const person = {
  name: "Amarjeet",
  greet: () => {
    console.log(this.name);
  }
};
person.greet(); 
// `this` here refers to the outer scope, not `person`
// So it will be undefined or from global scope
```

---

### 5. **Constructor Functions**

```js
function Person(name) {
  this.name = name;
}
const p = new Person("Amarjeet");
console.log(p.name); // "Amarjeet"
```

---

### 6. **Using `bind()`, `call()`, and `apply()`**

You can manually set the value of `this`:

```js
function sayHi() {
  console.log(this.name);
}
const user = { name: "Amarjeet" };
sayHi.call(user); // "Amarjeet"
sayHi.apply(user); // "Amarjeet"
const boundFn = sayHi.bind(user);
boundFn(); // "Amarjeet"
```

---

### Summary Table

| Context                    | `this` refers to                             |
| -------------------------- | -------------------------------------------- |
| Global scope               | `window` (in browsers)                       |
| Regular function           | `window` (or `undefined` in strict mode)     |
| Object method              | The object itself                            |
| Arrow function             | Lexical `this` (inherits from outer context) |
| Constructor function       | New object being created                     |
| With `call`/`apply`/`bind` | Object explicitly passed                     |

---

Let me know if you want practical exercises or a visual example in HTML/JS!
