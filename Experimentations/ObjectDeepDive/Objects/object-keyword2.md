
The `Object` in JavaScript is the parent or base object that provides a variety of built-in methods and properties for working with objects. Let’s explore the powerful methods of the `Object` constructor and what you can do with it:

---

### **Useful `Object` Methods**
Here’s a list of commonly used methods that `Object` provides:

1. **`Object.keys()`**:
   - Returns an array of the object’s keys.
   - Example:
     ```javascript
     const obj = { a: 1, b: 2, c: 3 };
     console.log(Object.keys(obj)); // Output: ["a", "b", "c"]
     ```

2. **`Object.values()`**:
   - Returns an array of the object’s values.
   - Example:
     ```javascript
     const obj = { a: 1, b: 2, c: 3 };
     console.log(Object.values(obj)); // Output: [1, 2, 3]
     ```

3. **`Object.entries()`**:
   - Returns an array of key-value pairs.
   - Example:
     ```javascript
     const obj = { a: 1, b: 2, c: 3 };
     console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 2], ["c", 3]]
     ```

4. **`Object.assign()`**:
   - Copies properties from one or more source objects to a target object.
   - Example:
     ```javascript
     const target = { a: 1 };
     const source = { b: 2, c: 3 };
     Object.assign(target, source);
     console.log(target); // Output: { a: 1, b: 2, c: 3 }
     ```

5. **`Object.freeze()`**:
   - Freezes an object, making it immutable (no changes can be made).
   - Example:
     ```javascript
     const obj = { a: 1 };
     Object.freeze(obj);
     obj.a = 2; // No effect
     console.log(obj.a); // Output: 1
     ```

6. **`Object.seal()`**:
   - Prevents adding or deleting properties, but allows modifying existing properties.
   - Example:
     ```javascript
     const obj = { a: 1 };
     Object.seal(obj);
     obj.a = 2; // Works
     delete obj.a; // No effect
     console.log(obj); // Output: { a: 2 }
     ```

7. **`Object.getOwnPropertyDescriptor()`**:
   - Retrieves metadata about a property (like whether it’s writable, enumerable, etc.).
   - Example:
     ```javascript
     const obj = { a: 1 };
     console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
     // Output: { value: 1, writable: true, enumerable: true, configurable: true }
     ```

8. **`Object.getPrototypeOf()`**:
   - Returns the prototype (parent object) of a given object.
   - Example:
     ```javascript
     const obj = {};
     console.log(Object.getPrototypeOf(obj)); // Output: Object prototype
     ```

9. **`Object.setPrototypeOf()`**:
   - Sets the prototype of an object.
   - Example:
     ```javascript
     const parent = { greet() { console.log("Hello!"); } };
     const obj = {};
     Object.setPrototypeOf(obj, parent);
     obj.greet(); // Output: Hello!
     ```

10. **`Object.is()`**:
    - Compares two values for strict equality, handling edge cases like `NaN`.
    - Example:
      ```javascript
      console.log(Object.is(NaN, NaN)); // Output: true
      console.log(Object.is(0, -0)); // Output: false
      ```

11. **`Object.create()`**:
    - Creates a new object with a specific prototype.
    - Example:
      ```javascript
      const parent = { greet() { console.log("Hello!"); } };
      const obj = Object.create(parent);
      obj.greet(); // Output: Hello!
      ```

---

### **Real-World Applications of `Object` Methods**
- **Data Manipulation**: Extracting keys/values from objects for iteration or validation (`Object.keys()` and `Object.values()`).
- **Object Cloning**: Copy properties using `Object.assign()` or `Object.create()` for clean data workflows.
- **Prototype Manipulation**: Manage inheritance in object-oriented programming (`Object.getPrototypeOf()` and `Object.setPrototypeOf()`).
- **Immutability Enforcement**: Use `Object.freeze()` for secure configurations and state management.
