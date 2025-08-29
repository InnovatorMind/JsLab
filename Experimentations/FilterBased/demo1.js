// 👉 Keep only the elements that occur **exactly once**
const mixed = [1, 2, 3, 2, 4, 5, 1, 6];


const unique = mixed.filter((item, index, arr) => {
    // console.log("item: " ,item, "'index: ", index);
    // console.log("arrr: ", arr)
  return arr.indexOf(item) === arr.lastIndexOf(item);
});
console.log(unique); // [3, 4, 5, 6]


// console.log(mixed.indexOf(1) === mixed.lastIndexOf(1))
