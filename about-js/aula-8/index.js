// const fruits = ["raspberry", "grapes", "blackberry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let i in fruits) {
//   console.log(fruits[i]);
// }

const person = {
  name: "John",
  lastname: "Doe",
  age: 21,
};

for (let key in person) {
  console.log(key, person[key]);
}
