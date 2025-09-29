
// apply method 
// 1. demo
// function greet() {
//     console.log(this.name);
// }
// greet.apply({ name: "Alice" }); // Alice 

// 2. demo 
function greet(city) {
    console.log(this.name, "from", city);
}
greet.apply({ name: "Alice" }, ["Paris"]); // Alice from Paris
