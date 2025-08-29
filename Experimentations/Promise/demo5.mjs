// Promise.allSettled()
// This method waits for all promises to either resolve or reject and returns an array of objects that describe the outcome of each Promise.


const promise1 = Promise.resolve('Success');
const promise2 = Promise.reject('Failed');

Promise.allSettled([promise1, promise2]).then(results => {
  console.log(results);
  // [ { status: 'fulfilled', value: 'Success' }, { status: 'rejected', reason: 'Failed' } ]
});

// Unlike Promise.all(), Promise.allSettled() does not short-circuit on failure.
// It waits for all promises to settle, even if some reject. 
// This provides better error handling for batch operations, where you may want to know the status of all tasks, regardless of failure.


// Read more:- https://nodejs.org/en/learn/asynchronous-work/discover-promises-in-nodejs