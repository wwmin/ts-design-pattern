import { Employee } from "../src/Composite";

let CEO = new Employee("John", "CEO", 30000);
let headSales = new Employee("Robert", "Head Sales", 20000);

let headMarketing = new Employee("Michel", "Head Marketing", 20000);

let clerk1 = new Employee("Laura", "Marketing", 10000);
let clerk2 = new Employee("Bob", "Marketing", 10000);

let salesExecutive1 = new Employee("Richard", "Sales", 10000);
let salesExecutive2 = new Employee("Rob", "Sales", 10000);

CEO.add(headSales);
CEO.add(headMarketing);

headSales.add(salesExecutive1);
headSales.add(salesExecutive2);

headMarketing.add(clerk1);
headMarketing.add(clerk2);

test("for employee list", () => {
  for (let person of CEO.subordinates) {
    console.log(person);
    for (let nextPerson of person.subordinates) {
      console.log(" \t " + nextPerson);
    }
  }
});
