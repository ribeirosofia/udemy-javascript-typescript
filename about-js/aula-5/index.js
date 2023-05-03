// const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const [first, second, third, ...rest] = numbers;
// console.log(first, second, third);
// console.log(rest);

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [first, second, third] = numbers;

console.log(third[1]);
