// try {
//   console.log(notExists);
// } catch (err) {
//   console.log("Não encontrado");
// }

const add = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("It has to be a number");
  }
  return x + y;
};

try {
  console.log(add(1, 2));
  console.log(add(3, "4"));
} catch (error) {
  console.log('Algo deu errado!');
}
