import {
  Meal,
  MealBuilder,
  ChickenBurger,
  VegBurger,
  Coke,
  Pepsi
} from "../src/Builder";

test("mealBuilder get a Meal", () => {
  let mealBuilder = new MealBuilder();
  let m1 = mealBuilder.prepareVegMeal();
  let m2 = mealBuilder.prepareNoteVegMeal();
  expect(m1 instanceof Meal).toBe(true);
  expect(m2 instanceof Meal).toBe(true);

  expect(m1.getCost() === new VegBurger().price() + new Coke().price()).toBe(
    true
  );
  expect(
    m2.getCost() === new ChickenBurger().price() + new Pepsi().price()
  ).toBe(true);
});
