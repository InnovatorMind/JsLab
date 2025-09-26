// usually, an array of promises) and returns a new promise.
// The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.
// For instance, the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:

// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(console.log); // 1,2,3 when promises are ready: each promise contributes an array member

// the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it’s still first in the array of results.
// A common trick is to map an array of job data into an array of promises, and then wrap that into Promise.all.

// =============================================================================================

// For instance, if we have an array of URLs, we can fetch them all like this:
// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
// ];

// map every url to the promise of the fetch
// let requests = urls.map(url => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests)
//     .then(responses => responses.forEach(
//         response => console.log(`${response.url}: ${response.status}`)
//     ));

// ===============================================================================================

// A bigger example with fetching user information for an array of GitHub users by their names (we could fetch an array of goods by their ids, the logic is identical):
// let names = ['iliakan', 'remy', 'jeresig'];

// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests)
//   .then(responses => {
//     // all responses are resolved successfully
//     for(let response of responses) {
//       console.log(`${response.url}: ${response.status}`); // shows 200 for every url
//     }

//     return responses;
//   })
//   // map array of responses into an array of response.json() to read their content
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   // all JSON answers are parsed: "users" is the array of them
//   .then(users => users.forEach(user => console.log(user.name)));

// ====================================================================================================

//   If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
// For instance:

// const handleError =

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000))
]).catch(err => {
  console.log("Caught error:", err.message);
}); // Error: Whoops!
// Here the second promise rejects in two seconds. That leads to an immediate rejection of Promise.all, so .catch executes: the rejection error becomes the outcome of the entire Promise.all.
