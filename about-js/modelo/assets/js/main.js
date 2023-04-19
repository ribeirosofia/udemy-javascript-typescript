const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResult("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const levelImc = getImcLevel(imc);

  const msg = `Seu IMC é ${imc}, ${levelImc}`;

  setResult(msg, true);
});

const getImcLevel = (imc) => {
  const level = [
    "Abaixo do peso",
    "peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return level[5];

  if (imc >= 34.9) return level[4];

  if (imc >= 29.9) return level[3];

  if (imc >= 24.9) return level[2];

  if (imc >= 18.5) return level[1];

  if (imc < 18.5) return level[0];
};

const getImc = (peso, altura) => {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
};

const createParagraph = () => {
  const p = document.createElement("p");
  //   p.classList.add("paragrafo-resultado");
  return p;
  //
};

const setResult = (msg, isValid) => {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = createParagraph();

  if (isValid) {
    p.classList.add("paragrafo-resultado-valido");
  } else {
    p.classList.add("paragrafo-resultado-invalido");
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
};
