export namespace DataAccessObject {
  class Student {
    private name: string;
    private rollNo: number;
    constructor(name: string, rollNo: number) {
      this.name = name;
      this.rollNo = rollNo;
    }
    getName(): string {
      return this.name;
    }
    setName(name: string) {
      this.name = name;
    }
    getRollNo(): number {
      return this.rollNo;
    }
    setRollNo(rollNo: number) {
      this.rollNo = rollNo;
    }
  }

  interface StudentDao {
    getAllStudents(): Array<Student>;
    getStudent(rollNo: number): Student;
    updateStudent(student: Student): boolean;
    deleteStudent(student: Student): boolean;
  }

  export class StudentDaoImpl implements StudentDao {
    students: Array<Student>;
    /**
     *
     */
    constructor() {
      this.students = new Array<Student>();
      let student1 = new Student("Robert", 0);
      let student2 = new Student("John", 1);
      this.students.push(student1);
      this.students.push(student2);
    }
    getAllStudents(): Student[] {
      return this.students;
    }
    getStudent(rollNo: number): Student {
      return this.students[rollNo];
    }
    updateStudent(student: Student): boolean {
      this.students[student.getRollNo()].setName(student.getName());
      return true;
    }
    deleteStudent(student: Student): boolean {
      this.students.splice(student.getRollNo(), 1);
      return true;
    }
  }
}
