/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  // throw 'Not implemented!';
  return new Promise((resolve, reject)=>{
    const errors = new Array(iterable.length)
    let completed = 0;
    if(iterable.length==0) return resolve()
    iterable.forEach((promise,index)=>{
        Promise.resolve(promise).then(resolve).catch((err)=>{
            errors[index] = err;
            completed +=1;
            if(completed==iterable.length){
              reject(AggregateError(errors,"All Promises are rejected"))
            }
        })
    })
  })
}