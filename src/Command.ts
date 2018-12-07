interface Order {
  execute(): boolean;
}

export class Stock {
  private name: string = "ABC";
  private quantity: number = 10;

  buy() {
    console.log(
      "Stock [ Name: " + this.name + " Quantity: " + this.quantity + " ] bought"
    );
  }
  sell() {
    console.log(
      "Stock [ Name: " + this.name + " Quantity: " + this.quantity + " ] sold"
    );
  }
}

export class BuyStock implements Order {
  private abcStock: Stock;
  constructor(abcStock: Stock) {
    this.abcStock = abcStock;
  }
  execute(): boolean {
    this.abcStock.buy();
    return true;
  }
}

export class SellStock implements Order {
  private abcStock: Stock;

  constructor(abcStock: Stock) {
    this.abcStock = abcStock;
  }
  execute(): boolean {
    this.abcStock.sell();
    return true;
  }
}

export class Broker {
  private orderList = new Array<Order>();
  takeOrder(order: Order) {
    this.orderList.push(order);
  }

  placeOrders(): boolean {
    for (let order of this.orderList) {
      if (order.execute()) continue;
      return false;
    }
    this.orderList.length = 0;
    return true;
  }
}
