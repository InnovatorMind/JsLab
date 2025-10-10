/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  // your code here
  return new Promise((resolve, reject)=>{
        promises.forEach((promise)=>{
            Promise.resolve(promise).then(resolve).catch(reject)
        })
  })
}