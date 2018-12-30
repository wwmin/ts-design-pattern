import { Facade } from "../src/Facade";

test("facade: shape", () => {
  let sm = new Facade.ShapeMaker();
  expect(sm.drawCircle()).toBe("circle");
  expect(sm.drawRectangle()).toBe("rectangle");
  expect(sm.drawSquare()).toBe("square");
});
