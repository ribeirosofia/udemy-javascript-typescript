const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");
  console.log(inputPeso, inputAltura);
});

const createTagP = () => {
  const p = document.createElement("p");
  //   p.classList.add("paragrafo-resultado");
  //   p.innerHTML = "bla";
  return p;
};

const setResult = (message) => {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  resultado.appendChild(p);
  const p = createTagP();
};
