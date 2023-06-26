const people = [
  { id: 3, name: "Elena" },
  { id: 2, name: "Lina" },
  { id: 1, name: "Lucia" },
];

// const newPeople = {};
// for (const person of people) {
//   const { id } = person;
//   newPeople[id] = { ...person };
// }

const newPeople = new Map();
for (const person of people) {
  const { id } = person;
  newPeople.set(id, { ...person });
}

// for (const people of newPeople.values()) {
//   console.log(people);
// }

newPeople.delete(2);
console.log(newPeople);
