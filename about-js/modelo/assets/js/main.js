const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Evento previnido");
  setResult("Oie");
});

const setResult = (msg) => {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = document.createElement("p");
  p.innerHTML = "Oie";
  resultado.appendChild(p);
};
