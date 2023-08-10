class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  talk() {
    console.log(`${this.name} is talking.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  drink() {
    console.log(`${this.name} is drinking.`);
  }
}

const p1 = new Person("John", "Doe");
const p2 = new Person("Oscar", "Wilde");
const p3 = new Person("Agatha", "Cristhie");
const p4 = new Person("Douglas", "Adams");
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
