import { unique, capitalize } from "../index.js";

test("unique() removes duplicates", () => {
  expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
});

test("capitalize() makes first letter uppercase", () => {
  expect(capitalize("hello")).toBe("Hello");
});
