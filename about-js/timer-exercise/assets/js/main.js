const displaySeconds = (seconds) => {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
};

const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const stopClock = document.querySelector(".stop");
let seconds = 0;

const startTime = () => {
  const timer = setInterval(() => {
    seconds++;
    clock.innerHTML = displaySeconds(seconds);
  }, 1000);
};

start.addEventListener("click", (event) => {
  startTime();
});

pause.addEventListener("click", (event) => {
  console.log("Cliquei no pausar");
});

stopClock.addEventListener("click", (event) => {
  console.log("Cliquei no zerar");
});
