import { CompositeEntity } from "../src/CompositeEntity";

test("client data", () => {
  let client = new CompositeEntity.client();
  client.setData("test", "data");
  client.printData();
  client.setData("second test", "data2");
  client.printData();
});
