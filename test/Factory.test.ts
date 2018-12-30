import {
  Mother,
  Jelly,
  xiaomi,
  AllFactory,
  fieldTest,
  Battery
} from "../src/Factory";

test("test Mother", () => {
  //宝宝要糖糖
  let jelly = Mother.giveMe("tangtang");
  //宝宝要飞飞
  let toyPlane = Mother.giveMe("feifei");

  expect(jelly instanceof Jelly).toBe(true); //妈妈给宝宝果冻
  expect(jelly.chewed).toBe(true); //宝宝得到的果冻是经过处理的
  expect(toyPlane === null).toBe(true); //妈妈不同意买飞机
});

test("test xiaomi factory", () => {
  expect(xiaomi("battery").get() instanceof Battery).toBe(true);
  expect(xiaomi("screen").get().name).toBe("screen");
});

let email = "wwei.min@163.com";
let myName = "wwmin";
test("fieldTest", () => {
  expect(fieldTest("email").test(email)).toBeTruthy;
  expect(fieldTest("character").test(myName)).toBeTruthy;
});

test("AllFactory", () => {
  let mom = AllFactory.getMother();
  let test = AllFactory.fetFieldTest();
  expect(mom === Mother).toBe(true);
  expect(test("email")).toBeTruthy;
});
