// 📌 filter even numbers----------------- //
const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((num) => {
//   return num % 2 === 0;
// });
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);



// 📌 Filter out negative numbers: 
const nums = [-3, -2, 5, 8];
const positive = nums.filter(n => n > 0); // [5, 8]
console.log(positive)


// 📌 Filter strings that start with "a":
const words = ['apple', 'banana', 'apricot', 'kiwi'];
const aWords = words.filter(word => word.startsWith('a'));
console.log(aWords); // ['apple', 'apricot']
