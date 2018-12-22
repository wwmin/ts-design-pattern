import { Decorator } from "../src/Decorator";
test("decorator", () => {
  let circle = new Decorator.Circle();
  console.log(circle);

  let redCircle = new Decorator.RedShapeDecorator(new Decorator.Circle());
  let redRectangle = new Decorator.RedShapeDecorator(new Decorator.Rectangle());
  expect(circle.borderColor).toBe("white");
  expect(redCircle.borderColor).toBe("red");
  expect(redRectangle.borderColor).toBe("red");
});
