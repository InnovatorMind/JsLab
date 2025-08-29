import { drawSquare as square } from "shapes/square";
import { drawCircle as circle } from "shapes/circle";
import React from "react"; // → https://esm.sh/react@19.1.0
import { createRoot } from "react-dom/client";


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

square(ctx, 50, 20, 20, "red");
circle(ctx, 30, 120, 120, "blue");


// React demo
const rootEl = document.getElementById("root");
const root = createRoot(rootEl);   // ✅ correct React 18+ API
root.render(React.createElement("h2", null, "Hello from the CDN 🚀"));