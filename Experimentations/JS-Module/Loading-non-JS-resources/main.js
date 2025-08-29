import colors from "./colors.json" with { type: "json" };
import sheet from "./styles.css" with { type: "css" };

document.adoptedStyleSheets = [sheet];

const palette = document.getElementById("palette");

colors.forEach(({ name, value }) => {
  const div = document.createElement("div");
  div.className = "color-box";
  div.style.backgroundColor = value;
  div.title = name;
  palette.appendChild(div);
});

// console.log(colors.map((c) => c.value));
