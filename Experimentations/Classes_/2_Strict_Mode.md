**JavaScript classes always run in strict mode**, even if you don’t explicitly write `"use strict"`.

This means:

* No undeclared variables
* `this` is `undefined` in standalone functions
* Certain silent errors will throw exceptions
* Reserved keywords can't be used improperly
* Assigning to read-only properties or deleting undeletables throws

---

## ⚠️ Let’s See an Example Without Classes

### 🧪 Normal (non-strict) mode:

```js
function sloppyMode() {
  x = 10; // No error: undeclared variable
  console.log(x);
}

sloppyMode(); // 10
```

This works because JavaScript *automatically* creates a global variable `x`.

---

## 🚫 Now Try the Same Thing in a Class

```js
class Test {
  someMethod() {
    x = 20; // ❌ ReferenceError: x is not defined
  }
}

const t = new Test();
t.someMethod();
```

Even though we **didn’t write** `"use strict"` — this throws:

> `ReferenceError: x is not defined`

Because class bodies and methods **implicitly run in strict mode**.

---

## ✅ What Else Changes in Strict Mode?

| Rule                                | Behavior in Strict Mode   |
| ----------------------------------- | ------------------------- |
| Undeclared variable                 | ❌ Throws error            |
| Deleting undeletable                | ❌ Throws error            |
| Duplicate parameter names           | ❌ Throws error            |
| Writing to read-only                | ❌ Throws error            |
| `this` inside function (non-method) | `undefined`, not `window` |

---

## 🧪 Another Example: `this` Behavior

```js
function testFunc() {
  console.log(this); // window (non-strict)
}

testFunc();
```

But inside a class:

```js
class Demo {
  show() {
    function inner() {
      console.log(this);
    }
    inner(); // ❌ undefined, not `window`
  }
}

new Demo().show();
```

Because the class enforces **strict mode**, `this` in `inner()` is `undefined`, not the global object.

---

## ✅ TL;DR

* JavaScript classes **always** run in strict mode.
* This improves safety and predictability.
* It’s like `"use strict"` is silently injected for you.

---

Would you like a cheat sheet of all strict mode behaviors? Or want to try some “tricky” strict mode bugs for practice?
