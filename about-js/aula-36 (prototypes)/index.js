function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.fullName = () => this.name + " " + this.lastname;
}

const person1 = new Person("Ashley", "O.");
const date = new Date();

console.dir(person1);
console.dir(date);
