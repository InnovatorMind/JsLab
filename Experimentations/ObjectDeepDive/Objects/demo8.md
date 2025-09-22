## 🔹 Shallow Copy

A **shallow copy** means **only the top-level properties** are copied.

* If a property is a **primitive** (string, number, boolean, etc.), it’s copied by value.
* If a property is a **reference type** (object, array, function), only the **reference (memory address)** is copied — not the actual data.

So, the original and the copy still **share nested objects**.

### Example:

```js
const obj1 = { a: 1, b: { c: 2 } };

// Shallow copy
const obj2 = { ...obj1 };

obj2.a = 10;       // changes only obj2
obj2.b.c = 20;     // ⚠ changes obj1 as well

console.log(obj1); // { a: 1, b: { c: 20 } }
console.log(obj2); // { a: 10, b: { c: 20 } }
```

👉 Top-level (`a`) is safe, but nested (`b.c`) is still linked.

---

## 🔹 Deep Copy

A **deep copy** means **everything is fully cloned**, including all nested objects and arrays.

* No references are shared.
* The copy is completely independent of the original.

### Example:

```js
const obj1 = { a: 1, b: { c: 2 } };

// Deep copy (structuredClone is a modern way)
const obj2 = structuredClone(obj1);

obj2.a = 10;       // changes only obj2
obj2.b.c = 20;     // ✅ does NOT affect obj1

console.log(obj1); // { a: 1, b: { c: 2 } }
console.log(obj2); // { a: 10, b: { c: 20 } }
```

---

✅ **In short:**

* **Shallow copy** → copies only first level; nested references are still shared.
* **Deep copy** → copies everything recursively; fully independent clone.

---

## 🔹 Ways to Create Copies in JavaScript

* **Shallow copy methods**

  * Spread syntax: `{ ...obj }`, `[...arr]`
  * `Object.assign({}, obj)`
  * `Array.prototype.slice()`
* **Deep copy methods**

  * `structuredClone(obj)` ✅ (modern & safe)
  * `JSON.parse(JSON.stringify(obj)` (works, but loses functions, `undefined`, special objects like `Date`, `Map`, etc.)
  * Manual recursion (write your own deep clone function)
  * Libraries like **Lodash** (`_.cloneDeep`)

---

difference between **shallow** and **deep copy** methods in JavaScript.

# 🔹 Shallow Copy Methods

### 1. Spread Syntax (`{ ...obj }`, `[...arr]`)

* Works for **top-level properties only**.
* Copies primitive values directly.
* Copies object/array references (not their contents).

```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };

obj2.a = 10;       // ✅ affects only obj2
obj2.b.c = 20;     // ⚠ also changes obj1

console.log(obj1); // { a: 1, b: { c: 20 } }
console.log(obj2); // { a: 10, b: { c: 20 } }
```

---

### 2. `Object.assign({}, obj)`

* Does the same thing as spread syntax.
* Often used for shallow copying objects before ES6.

```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = Object.assign({}, obj1);

obj2.b.c = 99;
console.log(obj1.b.c); // 99 (still linked)
```

---

### 3. `Array.prototype.slice()`

* Creates a shallow copy of an array.
* Same behavior: primitives are independent, objects/arrays are still shared.

```js
const arr1 = [{ x: 1 }, { y: 2 }];
const arr2 = arr1.slice();

arr2[0].x = 42;
console.log(arr1[0].x); // 42 (shared reference)
```

---

# 🔹 Deep Copy Methods

### 1. `structuredClone(obj)` ✅

* Modern built-in method (Node.js 17+, modern browsers).
* Creates a **true deep copy** of almost any object/array.
* Preserves special types like `Date`, `Map`, `Set`, `RegExp`, etc.

```js
const obj1 = { a: 1, b: { c: 2 }, d: new Date() };
const obj2 = structuredClone(obj1);

obj2.b.c = 99;
console.log(obj1.b.c); // 2 ✅ not affected
```

---

### 2. `JSON.parse(JSON.stringify(obj))`

* Classic deep copy trick.
* Converts object → JSON string → object again.
* Limitations:

  * Loses `Date` (turns into string), `Map`, `Set`, `Infinity`, `NaN`, functions, `undefined`.

```js
const obj1 = { a: 1, b: { c: 2 }, d: new Date(), f: () => {} };
const obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj2); // { a: 1, b: { c: 2 }, d: "2025-09-22T12:00:00.000Z" }
```

---

### 3. Manual Recursion

* You can write your own **deepClone** function to recursively copy objects and arrays.

```js
function deepClone(value) {
  if (value === null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(deepClone);

  const copy = {};
  for (let key in value) {
    copy[key] = deepClone(value[key]);
  }
  return copy;
}

const obj1 = { a: 1, b: { c: [2, 3] } };
const obj2 = deepClone(obj1);

obj2.b.c[0] = 99;
console.log(obj1.b.c[0]); // 2 ✅ unaffected
```

---

### 4. Libraries like **Lodash (`_.cloneDeep`)**

* Popular in real-world projects.
* Very reliable, handles many edge cases.

```js
import _ from "lodash";

const obj1 = { a: 1, b: { c: [2, 3] } };
const obj2 = _.cloneDeep(obj1);

obj2.b.c[0] = 99;
console.log(obj1.b.c[0]); // 2 ✅ unaffected
```

---

# ✅ Summary

* **Shallow copy methods** → Spread, `Object.assign`, `slice`, `Array.from`.

  * Only clone **first level**.
  * Nested objects/arrays are still linked.
* **Deep copy methods** → `structuredClone`, JSON trick, manual recursion, Lodash.

  * Fully independent copy.
  * Safer when you have nested structures.

---

👉 Think of it like this:

* **Shallow copy = photocopy of a folder** (subfolders inside are still shared).
* **Deep copy = photocopy of the folder *and all subfolders*** (totally independent).

---
