// named exports 
export const name = "Zebra"

// named export of a function 
export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}


const color = "blue";

export default color; 