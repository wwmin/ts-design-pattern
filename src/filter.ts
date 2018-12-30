export class Person {
  /**
   *
   */
  constructor(
    public name: string,
    public gender: "Male" | "Female",
    public maritalStatus: "Single" | "Married"
  ) {}
}

interface Criteria {
  meetCriteria(persons: Person[]): Person[];
}

export class CriteriaMale implements Criteria {
  meetCriteria(persons: Person[]) {
    return persons.filter((p: Person) => p.gender.toLowerCase() == "male");
  }
}

export class CriteriaFemale implements Criteria {
  meetCriteria(persons: Person[]) {
    return persons.filter((p: Person) => p.gender.toLowerCase() == "female");
  }
}

export class CriteriaSingle implements Criteria {
  meetCriteria(persons: Person[]) {
    return persons.filter(p => p.maritalStatus.toLowerCase() == "single");
  }
}

export class AndCriteria implements Criteria {
  constructor(public criteria: Criteria, public otherCriteria: Criteria) {}

  meetCriteria(persons: Person[]) {
    let firstCriteriaPersons = this.criteria.meetCriteria(persons);
    return this.otherCriteria.meetCriteria(firstCriteriaPersons);
  }
}

export class OrCriteria implements Criteria {
  constructor(public criteria: Criteria, public otherCriteria: Criteria) {}
  meetCriteria(persons: Person[]) {
    let firstCriteriaPersons = this.criteria.meetCriteria(persons);
    let secondCriteriaPersons = this.otherCriteria.meetCriteria(persons);
    firstCriteriaPersons.forEach((person: Person) => {
      if (!secondCriteriaPersons.find(p => p === person)) {
        secondCriteriaPersons.push(person);
      }
    });
    return secondCriteriaPersons;
  }
}
