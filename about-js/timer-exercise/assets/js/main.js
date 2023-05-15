const clock = () => {
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
  // document.addEventListener('click', (e)=>{
  // const el = e.target;
  // if (el.classList.contains('stop')){}
  // if (el.classList.contains('start')){}
  // if (el.classList.contains('pause')){}
  //})
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
    clock.classList.remove("pause-clock");
    seconds = 0;
  });
};
