const displayHours = () => {
  let date = new Date();
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
};

const timer = setInterval(() => {
  console.log(displayHours());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 3000);

setTimeout(() => {
  console.log("O cuscuz tá pronto");
}, 5000);
