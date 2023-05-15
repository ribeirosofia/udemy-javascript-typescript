const displaySeconds = (seconds) => {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
};

const clock = document.querySelector(".clock");
let seconds = 0;
let timer;

const startTime = () => {
  timer = setInterval(() => {
    seconds++;
    clock.innerHTML = displaySeconds(seconds);
  }, 1000);
};
document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("start")) {
    clock.classList.remove("pause-clock");
    clearInterval(timer);
    startTime();
  }
  if (el.classList.contains("pause")) {
    clearInterval(timer);
    clock.classList.add("pause-clock");
  }
  if (el.classList.contains("stop")) {
    clearInterval(timer);
    clock.innerHTML = "00:00:00";
    clock.classList.remove("pause-clock");
    seconds = 0;
  }
});