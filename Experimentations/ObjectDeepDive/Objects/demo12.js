// no inherited methods or properties

const obj = Object.create(null);

console.log(obj);          // {}
console.log(obj.toString); // undefined (no prototype!)