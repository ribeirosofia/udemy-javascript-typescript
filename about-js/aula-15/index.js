// function funcao() {
//   let total = 0;
//   for(let argumento of arguments){
//     total += argumento;
//   }
//   console.log(total);
// }

// funcao( 1, 2, 3, 4, 5, 6, 7, 8);

const calc = ( ...args) => {
  console.log(args);
}
calc("-", 0, 20, 30, 40, 50);
