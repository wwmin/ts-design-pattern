import { BusinessDelegate, Client } from "../src/BusinessDelegate";

test("business do task", () => {
  let businessDelegate = new BusinessDelegate();
  businessDelegate.setServiceType("EJB");
  let client = new Client(businessDelegate);
  expect(client.doTask()).toBe(true);
  businessDelegate.setServiceType("JMS");
  expect(client.doTask()).toBe(true);
});
