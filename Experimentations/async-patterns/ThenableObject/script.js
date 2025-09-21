// with script type module we should attach the variable to the window
// var a = 7;
// console.log(a); // ✅ Works
// // Try this if you want to access it in console:
// window.a = a;


// just call it like myObj.hello(<funcion>) it will 
// const myObj = {
//     hello(resolve) {
//     setTimeout(() => {
//       resolve("Resolve function Called! ");
//     }, 2000);
//   }
// }



// myObj.then((data) => {
//     console.log(data);
// })

// const myObj = {
//     then(resolve) {
//     setTimeout(() => {
//       resolve("Resolve function Called! ");
//     }, 2000);
//   }
// }
// window.myObj = myObj;

// console.log(await myObj);


class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve); // function() { native code }
    // resolve with this.num*2 after the 1 second
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}

new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result); // (*)
  })
  .then(alert); // shows 2 after 1000ms