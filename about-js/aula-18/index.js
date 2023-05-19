function returnFunction(name) {
  return function () {
    return name;
  };
}

const funcao = returnFunction("Ivone");
const funcao2 = returnFunction("Lara");
console.dir(funcao());
console.dir(funcao2());
