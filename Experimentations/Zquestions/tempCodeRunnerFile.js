function sym(arr1, arr2) {
  const combined = arr1.concat(arr2);
  const unique = combined.filter((item, index, arr) => {
    return arr.indexOf(item) === arr.lastIndexOf(item);
  });

  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      common.push(arr1[i]);
    }
  }

  const result = unique.filter((item) => !common.includes(item));
  return result;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
