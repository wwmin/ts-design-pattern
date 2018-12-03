import { Circle, RedCircle, GreenCircle } from "../src/Bridge";

test("circle shape", () => {
  let redCircle = new Circle(1, 1, 1, new RedCircle());
  let greenCircle = new Circle(2, 2, 2, new GreenCircle());
  expect(redCircle.draw()).toContain("red");
  expect(greenCircle.draw()).toContain("green");
});
