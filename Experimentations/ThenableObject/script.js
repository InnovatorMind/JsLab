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

const myObj = {
    then(resolve) {
    setTimeout(() => {
      resolve("Resolve function Called! ");
    }, 2000);
  }
}
window.myObj = myObj;

console.log(await myObj);
