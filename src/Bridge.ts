// 桥接模式

interface DrawApi {
  draw(radius: number, x: number, y: number): string;
}

export class RedCircle implements DrawApi {
  draw(radius: number, x: number, y: number) {
    console.log(radius, x, y);

    return "red circle";
  }
}

export class GreenCircle implements DrawApi {
  draw(radius: number, x: number, y: number) {
    console.log(radius, x, y);
    return "green circle";
  }
}

abstract class Shape {
  protected drawApi: DrawApi;
  protected constructor(drawApi: DrawApi) {
    this.drawApi = drawApi;
  }
  abstract draw(): string;
}

export class Circle extends Shape {
  private _x: number;
  private _y: number;
  private _radius: number;

  constructor(x: number, y: number, radius: number, drawApi: DrawApi) {
    super(drawApi);
    this._x = x;
    this._y = y;
    this._radius = radius;
  }
  draw() {
    return this.drawApi.draw(this._radius, this._x, this._y);
  }
}
