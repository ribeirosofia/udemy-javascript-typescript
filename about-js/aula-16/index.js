// function soma(a, b) {
//   return a + b;
// }

// function createPerson(nome, sobrenome) {
//   return { nome, sobrenome };
// }

// const p1 = createPerson("Joaninha", "Doe");
// const p2 = {
//   nome: "Cassandra",
//   sobrenome: "Oliveira",
// };

// console.log(typeof p1);
// console.log(typeof p2);

// function developPhrase(start) {
//   function developRest(rest) {
//     return start + " " + rest;
//   }
//   return developRest;
// }

// const talkPhrase = developPhrase("Olaaa");
// const rest = talkPhrase("mundo!!!");
// console.log(rest);

function createMultiple(multiple) {
  return function (n) {
    return n * multiple;
  };
}

const double = createMultiple(2);
const triple = createMultiple(3);
const fourTimes = createMultiple(4);

console.log(double(6));
console.log(triple(7));
console.log(fourTimes(10));
