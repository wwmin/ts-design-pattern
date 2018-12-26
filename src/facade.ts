export namespace Facade {
  interface Shape {
    draw(): string;
  }

  class Rectangle implements Shape {
    draw() {
      console.log(this);
      return "rectangle";
    }
  }

  class Square implements Shape {
    draw() {
      console.log(Object.getPrototypeOf(this));
      return "square";
    }
  }

  class Circle implements Shape {
    draw() {
      console.log("Circle::draw()");
      return "circle";
    }
  }

  export class ShapeMaker {
    private circle: Circle;
    private rectangle: Rectangle;
    private square: Square;
    /**
     *
     */
    constructor() {
      this.circle = new Circle();
      this.rectangle = new Rectangle();
      this.square = new Square();
    }
    drawCircle() {
      return this.circle.draw();
    }
    drawRectangle() {
      return this.rectangle.draw();
    }
    drawSquare() {
      return this.square.draw();
    }
  }
}
