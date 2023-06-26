const eat = {
  eat() {
    console.log(`${this.name} is eating.`);
  },
};

const drink = {
  drink() {
    console.log(`${this.name}is drinking.`);
  },
};

const personPrototype = { ...eat, ...drink };

function createPerson(name, lastname) {
  return Object.create(personPrototype, {
    name: { value: name },
    lastname: { value: lastname },
  });
}

const p1 = createPerson("Joao", "Grilo");
const p2 = createPerson("Maria", "Bonita");
console.log(p1);
console.log(p2);
