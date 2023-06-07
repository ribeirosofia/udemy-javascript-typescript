//Add all os the arrays
// Return an array of pairs (Filter)
// Return an array of double strings

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numbers.reduce((accumulator, value) => {
  // Reduce:  accumulator += value;
  //  Filter: if (value % 2 === 0)
  accumulator.push(value * 2); // Map
  return accumulator;
  // Reduce: }, 0);
  //Filter, map:
}, []);
console.log(total);

//Return the age of the oldest person

const people = [
  { name: "Luiz", age: 63 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 55 },
  { name: "Leticia", age: 19 },
  { name: "Rosana", age: 64 },
  { name: "Wallace", age: 47 },
];

const oldest = people.reduce((accumulator, value) => {
  if (accumulator.age > value.age) return accumulator;
  return value;
}, 0);

console.log(oldest);
