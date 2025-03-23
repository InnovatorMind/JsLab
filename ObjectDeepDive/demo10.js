// 8. Object Descriptors
// Access metadata about an object’s properties:

const obj = { a: 42 };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
console.log(descriptor);
// Output: { value: 42, writable: true, enumerable: true, configurable: true }