// 建造者模式

// 从一个个简单的类组合成一个大的类。

// 食品包装接口
interface Packing {
  pack(): string;
}

// 纸质包装类,专门用来包裹汉堡
class Wrapper implements Packing {
  pack() {
    return "Wrapper";
  }
}

// 瓶子包装类,专门用来装饮料
class Bottle implements Packing {
  pack() {
    return "Bottle";
  }
}

// 食物接口
interface Item {
  name(): string;
  packing(): Packing;
  price(): number;
}

// 基类的好处,就是把公共的逻辑提取到基类中
// 汉堡基类
abstract class Burger implements Item {
  name() {
    return "Burger";
  }
  packing(): Packing {
    return new Wrapper();
  }
  abstract price(): number;
}

// 饮料基类
abstract class ColdDrink implements Item {
  name() {
    return "ColdDrink";
  }
  packing(): Packing {
    return new Bottle();
  }
  abstract price(): number;
}

// 素食汉堡
class VegBurger extends Burger {
  name() {
    return "VegBurger";
  }
  price() {
    return 25;
  }
}

// 鸡肉汉堡
class ChickenBurger extends Burger {
  name() {
    return "ChickenBurger";
  }
  price() {
    return 50;
  }
}

class Coke extends ColdDrink {
  name() {
    return "Coke";
  }
  price() {
    return 30;
  }
}

// 百事可乐
class Pepsi extends ColdDrink {
  name() {
    return "Pepsi";
  }
  price() {
    return 35;
  }
}

// 套餐
class Meal {
  private _items: Item[] = [];
  addItem(item: Item) {
    this._items.push(item);
  }
  getCost() {
    let cost = 0;
    for (let item of this._items) {
      cost += item.price();
    }
    return cost;
  }
  showItems() {
    for (let item of this._items) {
      console.log(`Item : ${item.name()}`);
      console.log(`Packing : ${item.packing().pack()}`);
      console.log(`Item : ${item.price()}`);
    }
  }
}

class MealBuilder {
  // 准备素食套餐
  prepareVegMeal() {
    let meal = new Meal();
    meal.addItem(new VegBurger());
    meal.addItem(new Coke());
    return meal;
  }
  // 准备非素食套餐
  prepareNoteVegMeal() {
    let meal = new Meal();
    meal.addItem(new ChickenBurger());
    meal.addItem(new Pepsi());
    return meal;
  }
}

export { Meal, MealBuilder, VegBurger, ChickenBurger, Coke, Pepsi };
