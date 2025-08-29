function sym(...arrays) {

  const merged = arrays.flat();
  const unique = [...new Set(merged)];
  //   console.log("unique: ", unique)

  const common = unique.filter((item) =>
    arrays.every((arr) => arr.includes(item))
  );

//   console.log("coomon: ", common)

    const result = unique.filter((item) => !common.includes(item));
    result.sort();
  return result;
}

// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
