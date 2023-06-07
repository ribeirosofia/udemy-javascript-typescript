// Return the sum of the double of all pairs
// Filter the pairs
// Double the values
// Reduce (sum all of the values)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pairs = numbers
  .filter((value) => {
    return value % 2 === 0;
  })
  .map((value) => {
    return value * 2;
  })
  .reduce((ac, value) => {
    return ac + value;
  });
console.log(pairs);
