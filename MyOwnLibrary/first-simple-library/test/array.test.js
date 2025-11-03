import { unique } from "../src/array.js";

test("removes duplicates", () => {
  expect(unique([1,1,2,3])).toEqual([1,2,3]);
});
