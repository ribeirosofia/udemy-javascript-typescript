// Double the array:

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const double = numbers.map((value) => value * 2);
console.log(double);

// For each element:
// 1) Return only a single string value with the name of the person
// 2) Remove only the key 'name' from the object
// 3) Add the key id on each object

const people = [
  { name: "Luiz", age: 63 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 55 },
  { name: "Leticia", age: 19 },
  { name: "Rosana", age: 32 },
  { name: "Wallace", age: 47 },
];

//1)
const singleString = people.map((obj) => obj.name);
console.log(singleString);

// 2)
const removeName = people.map((obj) => {
  return { age: obj.age };
});
console.log(removeName);

// 3)
const addId = people.map((obj, i) => {
  const newObj = { ...obj };
  newObj.id = i;
  return newObj;
});

console.log(people);
console.log(addId);
