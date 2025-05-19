const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 15 },
  { name: 'David', age: 30 },
];
// 👉 Keep only users who are 18 or older

const adults = users.filter(user => user.age >= 18);
console.log(adults);
// [{ name: 'Bob', age: 22 }, { name: 'David', age: 30 }]
