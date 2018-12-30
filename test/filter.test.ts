import {
  Person,
  CriteriaMale,
  CriteriaFemale,
  AndCriteria,
  OrCriteria,
  CriteriaSingle
} from "../src/filter";

test("person", () => {
  let persons = new Array<Person>();
  persons.push(new Person("Robert", "Male", "Single"));
  persons.push(new Person("John", "Male", "Married"));
  persons.push(new Person("Laura", "Female", "Married"));
  persons.push(new Person("Diana", "Female", "Single"));
  persons.push(new Person("Mike", "Male", "Single"));
  persons.push(new Person("Boggy", "Male", "Single"));

  let male = new CriteriaMale();
  let female = new CriteriaFemale();
  let single = new CriteriaSingle();

  let singleMale = new AndCriteria(single, male);
  let singleOrFemale = new OrCriteria(single, female);

  function getFilter(propName: keyof Person, key: string) {
    return (persons: Person[]) => {
      return persons.filter(
        p => (p[propName] as string).toLocaleLowerCase() == key
      );
    };
  }

  let femaleFilter = getFilter("gender", "female");

  function maleFilter(persons: Person[]) {
    return persons.filter(p => p.gender.toLocaleLowerCase() === "male");
  }

  expect(male.meetCriteria(persons)).toHaveLength(4);
  expect(maleFilter(persons)).toHaveLength(4);
  expect(female.meetCriteria(persons)).toHaveLength(2);
  expect(femaleFilter(persons)).toHaveLength(2);
  expect(singleMale.meetCriteria(persons)).toHaveLength(3);
  expect(singleOrFemale.meetCriteria(persons)).toHaveLength(5);
});
