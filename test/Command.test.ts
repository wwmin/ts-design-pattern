import { Stock, BuyStock, SellStock, Broker } from "../src/Command";

test("take stock", () => {
  let abcStock = new Stock();
  let buyStockOrder = new BuyStock(abcStock);
  let sellStockOrder = new SellStock(abcStock);
  let brock = new Broker();
  brock.takeOrder(buyStockOrder);
  brock.takeOrder(sellStockOrder);

  expect(brock.placeOrders()).toBe(true);
});
