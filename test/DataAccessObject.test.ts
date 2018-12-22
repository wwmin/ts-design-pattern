import { DataAccessObject } from "../src/DataAccessObject";

test("data access", () => {
  let studentDao = new DataAccessObject.StudentDaoImpl();
  expect(studentDao.getAllStudents().length > 0).toBe(true);
  let student = studentDao.getAllStudents()[0];
  student.setName("wwmin");
  expect(studentDao.updateStudent(student)).toBe(true);
});
