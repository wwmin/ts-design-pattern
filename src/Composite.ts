// 复合结构
export class Employee {
  name: string;
  dept: string;
  salary: number;

  subordinates: Employee[] = new Array<Employee>();
  constructor(name: string, dept: string, salary: number) {
    this.name = name;
    this.dept = dept;
    this.salary = salary;
  }

  add(e: Employee) {
    this.subordinates.push(e);
  }

  remove(e: Employee) {
    let employeeIndex = this.subordinates.findIndex(p => p === e);
    if (employeeIndex > -1) {
      this.subordinates.splice(employeeIndex, 1);
    }
  }

  toString() {
    return (
      "Employee :[ Name : " +
      this.name +
      ", dept : " +
      this.dept +
      ", salary :" +
      this.salary +
      " ] \n"
    );
  }
}