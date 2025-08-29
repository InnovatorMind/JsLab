import color, {name, draw} from "./demo.js";

console.log(name);
console.log(color);

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// call the function
const result = draw(ctx, 50, 10, 20, "red");

console.log(result); 