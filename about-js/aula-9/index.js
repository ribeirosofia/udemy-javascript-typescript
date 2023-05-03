const names = ["Jane", "Doe"];

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// for (let i in name) {
//   console.log(name[i]);
// }

// for (let value of name) {
//   console.log(value);
// }

names.forEach((el, i) => {
  console.log(el, i);
});
