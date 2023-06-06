//Return numbers bigger than 10

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const bigger = numbers.filter((value) => value > 10);
console.log(bigger);

//Return people that has name with 6 or more letters
//Return people that has age above 50
//Return people which name ends with letter A

const people = [
  { name: "Luiz", age: 63 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 55 },
  { name: "Leticia", age: 19 },
  { name: "Rosana", age: 32 },
  { name: "Wallace", age: 47 },
];

const nameLetters = people.filter((obj) => obj.name.length >= 6);
console.log(nameLetters);

const ageAbove50 = people.filter((obj) => obj.age >= 50);
console.log(ageAbove50);

const finalA = people.filter((obj) => obj.name.toLowerCase().endsWith("a"));
console.log(finalA);
