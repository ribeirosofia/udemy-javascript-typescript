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
let timer;

const startTime = () => {
  timer = setInterval(() => {
    seconds++;
    clock.innerHTML = displaySeconds(seconds);
  }, 1000);
};

start.addEventListener("click", (event) => {
  clock.classList.remove("pause-clock");
  clearInterval(timer);
  startTime();
});

pause.addEventListener("click", (event) => {
  clearInterval(timer);
  clock.classList.add("pause-clock");
});

stopClock.addEventListener("click", (event) => {
  clearInterval(timer);
  clock.innerHTML = "00:00:00";
  seconds = 0;
});
