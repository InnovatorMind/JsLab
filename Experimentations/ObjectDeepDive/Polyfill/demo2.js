/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  // throw 'Not implemented!';
   return new Promise((resolve, reject) => {
    if (iterable.length === 0) return resolve([]);

    const result = [];
    let completed = 0;

    iterable.forEach((it, index) => {
      Promise.resolve(it).then((val) => {
          result[index] = val;
          completed += 1;
          if (completed === iterable.length) resolve(result);
        }).catch((err) => reject(err));
    });
  });
 
}