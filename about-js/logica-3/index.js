// Escreva uma função que recebe um número e
// retorne o seguinte?
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio numero
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

const fizzBuzz = (testNumber) => {
  if (typeof testNumber !== "number") return testNumber;
  if (testNumber % 3 === 0 && testNumber % 5 === 0) return "FizzBuzz";
  if (testNumber % 3 === 0) return "Fizz";
  if (testNumber % 5 === 0) return "Buzz";
  return testNumber;
};

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
