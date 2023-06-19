// -- Factory function
// const createPerson = (name, lastname) => {
//   return {
//     name,
//     lastname,
//     get fullName() {
//       return `${this.name} ${this.lastname}`;
//     },
//   };
// };

// const p1 = createPerson("John", "Doe");
// console.log(p1.fullName);

// Constructor function
function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

const p1 = new Person("John", "Doe");
console.log(p1);
