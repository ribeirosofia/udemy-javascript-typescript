const person = {
  name: "John",
  lastname: "Doe",
  age: 21,
  address: {
    street: "Rua Consolação",
    number: "320",
  },
};

// const { name: firstname = "", lastname } = person;
// console.log(firstname, lastname);

const { name, lastname, ...rest } = person;
console.log(name, rest);
