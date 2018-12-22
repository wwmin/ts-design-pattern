export namespace Decorator {
  interface Shape {
    borderColor: string;
    draw(): void;
  }
  export class Rectangle implements Shape {
    borderColor = "white";
    draw() {
      return "rectangle";
    }
  }

  export class Circle implements Shape {
    borderColor = "white";
    draw() {
      return "circle";
    }
  }

  abstract class ShapeDecorator implements Shape {
    borderColor = "white";
    constructor(protected decoratedShape: Shape) {}
    draw() {
      this.decoratedShape.draw();
    }
  }

  export class RedShapeDecorator extends ShapeDecorator {
    constructor(decoratedShape: Shape) {
      super(decoratedShape);
      this.borderColor = "red";
    }

    draw() {
      this.decoratedShape.draw();
    }
  }
}
