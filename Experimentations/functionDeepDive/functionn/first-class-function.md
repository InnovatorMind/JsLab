A **first-class function** (also called *first-class citizen function*) means that in a programming language, **functions are treated like any other value**.

That is, functions can:

1. **Be assigned to variables**

   ```js
   const greet = function() {
     console.log("Hello!");
   };
   greet(); // Hello!
   ```

2. **Be passed as arguments** to other functions (higher-order functions)

   ```js
   function execute(fn) {
     fn();
   }
   execute(() => console.log("I was passed as an argument!"));
   ```

3. **Be returned from functions**

   ```js
   function multiplier(factor) {
     return function(x) {
       return x * factor;
     };
   }
   const double = multiplier(2);
   console.log(double(5)); // 10
   ```

4. **Be stored in data structures** (arrays, objects, etc.)

   ```js
   const funcs = [
     () => console.log("First"),
     () => console.log("Second")
   ];
   funcs[1](); // Second
   ```

---

* **Modern dynamic/functional languages** (JS, Python, Ruby, Haskell, etc.) → ✅ Full support.
* **Older procedural languages** (C, Fortran, Pascal) → ❌ Limited or none.
* **Object-oriented heavyweights (Java, C#)** → ❓ Partial; improved with lambdas/functional features.
* **Modern C++** → ✅ Supports it via lambdas and `std::function`, but older C++ was ❌.

---


