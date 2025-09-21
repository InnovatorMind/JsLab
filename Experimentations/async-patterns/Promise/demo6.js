let promise = new Promise(function (resolve, reject) {
      setTimeout(() => resolve("done!"), 1000); // resolve the promise
    // setTimeout(() => reject(new Error("Whoops!")), 1000); // reject the promise
});

// resolve runs the first function in .then
promise.then(
    result => console.log(result), // shows "done!" after 1 second
    // error => console.log(error) // doesn't run
).catch(error => {
    console.error('Error:', error); // handling error using catch
}).finally(() => console.log("Stop loading indicator")
) // finally will run always